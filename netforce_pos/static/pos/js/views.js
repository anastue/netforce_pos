var CompleteSaleView=Backbone.View.extend({
    template: Handlebars.templates.complete_sale,
    events: {
        'click .select-sale-order' : 'select_sale_order',
        'click .check-all-sale-order' : 'check_all_sale_order',
        'click .btn-complete-sale' : 'complete_sale',
    },

    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.nf_model='pos.complete.sale';
        this.flash=null;
        this.hide_pb=false;
        this.sale_id = null;
        this.check_sale_ids=[];
    },

    complete_sale:function(e){
        console.log("CompleteSaleView.complete_sale");
        var that = this;
        var is_select = false;
        var all_tr = $(".sale-id span input");
        var i;
        for (i = 0; i < all_tr.length; i++) {
            if (all_tr[i].checked) {
                that.check_sale_ids.push(all_tr[i].value);
                is_select=true;
            }
        }
        if(!is_select){
            that.flash={
                'type': 'danger',
                'message': 'Nothing selection',
            }
        }
        that.render();
    },

    check_all_sale_order:function(e){
        console.log("CompleteSaleView.select_all_sale_order");
        var that = this;
        var all_tr = $(".sale-id span input");
        var i;
        var is_check = false;
        var is_check_all=$("#select-all").checked;
        if(is_check_all){
            is_check = true;
        }
        for (i = 0; i < all_tr.length; i++) {
            all_tr[i].checked=true;
        }
    },

    select_sale_order:function(e){
        console.log("CompleteSaleView.select_sale_order");
        e.preventDefault();
        var that = this;
        that.sale_id = $(e.target).parents("tr").data("id");
        that.hide_pb=true;
        that.render();
    },

    render: function(cb) {
        console.log("CompleteSaleView.render");
        var that=this;
        var args={
            'hide_pb' : that.hide_pb,
            'sale_id' : that.sale_id,
        };
        if(that.check_sale_ids){
            console.log("yes ",that.check_sale_ids);
            args['check_sale_ids']=that.check_sale_ids;
        }
        var options={};
        rpc_execute(that.nf_model,"get_complete_sale",[args],options,function(err,res){ 
            if(err){
                alert("ERROR "+err['message']);
            }else{
                var data={
                    'flash' : that.flash,
                    'sale_orders' : res['sale_orders'],
                    'sale_order' : res['sale_order'],
                    'amount_total' : res['amount_total'] || " -",
                    'customer_name' : res['customer_name'] || " -",
                    'customer_phone' : res['customer_phone'] || " -",
                };
                var html=that.template(data);
                that.$el.html(html);
                that.hide_pb=false;
                that.check_sale_ids=[];
                that.flash=null;
            }
        });
    },
});
var CurrentSaleView=Backbone.View.extend({
    template: Handlebars.templates.current_sale,
    events: {
        'click .btn-back': 'do_back',
        'click .select-categ': 'select_categ',
        'click .select-product': 'select_product',
        'click .select-categ-tr': 'select_categ_tr',
        'click .nav-select-categ': 'nav_select_categ',
        'click .nav-last-categ': 'nav_last_categ',
        'click .nav-first-categ': 'nav_first_categ',
        'click .nav-select-product': 'nav_select_product',
        'click .nav-last-product': 'nav_last_product',
        'click .nav-first-product': 'nav_first_product',
        'click .see-large': 'see_large',
        'click .see-small': 'see_small',
        'click .btn-pay': 'pay',
        'click .btn-pay-confirm': 'pay_confirm',
        'click .btn-search-product': 'search_product',
        'click .btn-search-customer': 'search_customer',
        'click .remove-line': 'remove_line',
        'focusout input[type=text]' : 'focus_out',
        'keypress input[type=text]' : 'keypress_txt',
    },

    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.nf_model='pos.current.sale';
        this.is_see_large=true;
        this.hide_pb=false;
        this.page_categ=1;
        this.page_product=1;
        this.items=[];
        this.all_products=[];
        this.sub_total=0;
        this.change=0;
        this.flash=null;
        this.contact_id=null;
    },

    search_product:function(e){
        console.log("CurrentSaleView.search_product");
        var that = this;
        var input = $("input[name='search-product']").val();
        if(input){
            var res = map[input];
            if(res){
                var same_prod=false;
                for(var i in that.items){
                    if(that.items[i].id===res.id){
                        that.items[i].qty+=1;
                        that.items[i].create_sec= new Date().getTime();
                        same_prod=true;
                        that.sub_total+=that.items[i].price;
                    }
                }
                if(!same_prod){
                    that.items.push({
                        'create_sec' : new Date().getTime(),
                        'id' : res['id'],
                        'name': res['name'],
                        'qty': 1,
                        'price': res['price'],
                    });
                that.sub_total+=res['price'];
                }
            }
        }
        that.hide_pb=true;
        that.render();
    },

    search_customer:function(e){
        console.log("CurrentSaleView.search_customer");
        e.preventDefault();
        var input = $("input[name='search-customer']").val();
        var that=this;
        if(!input){ return; }
        var args={
            'input' : input,
            'res' : that,
        };
        var view=new SearchCustomerView(args);
        view.render();
        $('.modal').remove();
        $('body').append(view.el);
        $('.modal').fadeIn();
        view.$el.modal();
        view.on("close_setting",function(args,opts){
            location.reload();
        });
    },

    keypress_txt:function(e){
        console.log("CurrentSaleView.keypress_txt");
        var that=this;
        var name = $(e.target).attr("name");
        var k= e.keyCode || e.which;
        // keycode 48-57 is number
        // keycode 13 is ENTER
        // keycode 190 and 46 is DOT ( . )
        if(name=="item_qty" || name=="to_pay"){
            if(k==13){
                that.focus_out(e);
            }
            if(k==48||k==49||k==50||k==51||k==52||k==53||k==54||k==55||k==56||k==57||k==190||k==46){ //keycode,can find it on website
                if(that.flash){$(".alert").remove();}
            }else{
                that.flash=null;
                that.hide_pb=true;
                that.to_pay=$("input[name=to_pay]").val();
                that.render();
                return false;
            }
        }
    },

    focus_out:function(e){
        e.preventDefault();
        console.log("CurrentSaleView.focus_out");
        var name = $(e.target).attr("name");
        var that=this;
        var product_id; var new_qty; var old_qty;
        var balance; var inc_price; var price;
        if(name=="item_qty"){
            product_id = $(e.target).parents("tr").data("id");
            new_qty = $(e.target).val();
            for(var i in that.items){
                if(that.items[i].id===product_id){
                    old_qty=that.items[i].qty;
                    price=that.items[i].price;
                    balance = new_qty-old_qty;
                    inc_price = balance*price;
                    that.sub_total+=inc_price;
                    that.items[i].qty=new_qty;
                    that.hide_pb=true;
                    that.flash-null;
                    that.render();
                }
            }
            
        }
    },

    remove_line:function(e){
        console.log("CurrentSaleView.remove_line");
        var that=this;
        var prod_id=$(e.target).parents("tr").data("id");
        that.items=that.items.filter(function (el) {
            if(el.id == prod_id){
                that.sub_total-=el.price;
            }
            return el.id !== prod_id;
        });
        that.hide_pb=true;
        that.render();
        
    },
    pay:function(e){
        e.preventDefault();
        console.log("CurrentSasleView.pay");
        var that=this;
        that.to_pay=$("input[name=to_pay]").val();
        if(that.items.length===0){
            that.flash={
                'type': 'danger',
                'message': 'Please select product',
            }
            that.hide_pb=true;
            that.render();
            return;
        }
        that.change=that.to_pay-that.total_amount;
        if(parseFloat(that.change) < 0){
            that.flash={
                'type': 'danger',
                'message': 'To pay Less Than Total',
            }
            that.hide_pb=true;
            that.render();
            return;
        }
        that.is_pay = true;
        that.flash=null;
        that.hide_pb=true;
        that.render();
    },

    pay_confirm:function(e){
        console.log("CurrentSaleView.Pay Confirm");
        e.preventDefault();
        var that = this;
        var args={
            'hide_pb' : that.hide_pb,
            'to_pay' : that.to_pay,
            'items' : that.items,
            'amount' : that.total_amount,
            'contact_id' : that.contact_id
        };
        var options={};
        rpc_execute(that.nf_model,"pay",[args],options,function(err,res){ 
            if(err){
                alert("ERROR "+err['message']);
            }else{
                that.flash={
                    'type': 'success',
                    'message': 'Pay successfully',
                }
                that.hide_pb=true;
                that.is_pay = false;
                that.items=[];
                that.sub_total=0;
                that.to_pay=null;
                that.change=0;
                that.contact_id=null;
                that.render();
            }
        });
    },

    select_product:function(e){
        e.preventDefault();
        console.log("CurrentSaleView.select_product");
        var that=this;
        if(that.is_pay){
            return;
        }
        var product_id=$(e.target).parents("div").data("id");
        if(!product_id){
            var product_id=$(e.target).parents("tr").data("id");
        }
        var same_prod=false;
        for(var i in that.items){
            if(that.items[i].id===product_id){
                that.items[i].qty+=1;
                that.items[i].create_sec= new Date().getTime();
                same_prod=true;
                that.sub_total+=that.items[i].price;
            }
        }
        if(!same_prod){
            var args={
                'product_id':product_id,
                'hide_pb' : true
                };
            var options={};
            rpc_execute(that.nf_model,"get_product",[args],options,function(err,res){ 
                if(err){
                    alert("ERROR "+err['message']);
                }else{
                    that.items.push({
                        'create_sec' : new Date().getTime(),
                        'id' : res['id'],
                        'name': res['name'],
                        'qty': res['qty'],
                        'price': res['price'],
                    });
                    that.sub_total+=res['price'];
                }
            });
        }
        that.hide_pb=true;
        that.render();

    },

    nav_first_categ:function(e){
        e.preventDefault();
        console.log("CurrnetSaleView.nav_first_categ");
        var that = this;
        that.page_categ=1;
        that.hide_pb=true;
        that.render();
    },

    nav_last_categ:function(e){
        e.preventDefault();
        console.log("CurrnetSaleView.nav_last_categ");
        var that = this;
        that.page_categ=that.nav_categs.length;
        that.hide_pb=true;
        that.render();
    },

    nav_first_product:function(e){
        e.preventDefault();
        console.log("CurrnetSaleView.nav_first_product");
        var that = this;
        that.page_product=1;
        that.hide_pb=true;
        that.render();
    },

    nav_last_product:function(e){
        e.preventDefault();
        console.log("CurrnetSaleView.nav_last_product");
        var that = this;
        that.page_product=that.nav_products.length;
        that.hide_pb=true;
        that.render();
    },

    see_large:function(e){
        e.preventDefault();
        console.log("CurrentSaleView.see_large");
        var that=this;
        that.is_see_large=true;
        that.hide_pb=true;
        that.render();
    },

    see_small:function(e){
        e.preventDefault();
        console.log("CurrentSaleView.see_small");
        var that=this;
        that.is_see_large=false;
        that.hide_pb=true;
        that.render();
    },

    do_back:function(e){
        e.preventDefault();
        console.log("CurrentSaleView.do_back");
        var that=this;
        that.is_select_categ=false;
        that.render();
    },

    nav_select_categ:function(e){
        console.log("CurrentSaleView.nav_select_categ");
        e.preventDefault();
        var that=this;
        that.page_categ=$(e.target).text();
        that.hide_pb=true;
        that.render();
    },

    nav_select_product:function(e){
        console.log("CurrentSaleView.nav_select_product");
        e.preventDefault();
        var that=this;
        that.page_product=$(e.target).text();
        that.hide_pb=true;
        that.render();
    },

    select_categ:function(e){
        console.log("CurrentSaleView.select_categ");
        e.preventDefault();
        var that=this;
        that.page_product=1;
        that.categ_id=$(e.target).parents("div").data('id');
        if(!that.categ_id){
            that.categ_id=$(e.target).parents("li").data('id');
        }
        that.is_select_categ=true;
        that.render();
    },

    select_categ_tr:function(e){
        console.log("CurrentSaleView.select_categ_tr");
        e.preventDefault();
        var that=this;
        that.page_product=1;
        that.categ_id=$(e.target).parents("tr").data('id');
        that.is_select_categ=true;
        that.render();
    },

    render: function(cb) {
        console.log("CurrentSaleView.render");
        var that=this;
        var contact_id = $("#contact-id").val();
        if(contact_id){that.contact_id = contact_id}
        var args={
            'hide_pb' : true,
            'page_categ':that.page_categ,
            'page_product':that.page_product,
            'is_see_large' : that.is_see_large,
            'contact_id' : that.contact_id,
        };
        if(that.categ_id){
            args['categ_id']=that.categ_id;
        }
        var options={};
        rpc_execute(that.nf_model,"get_current_sale",[args],options,function(err,res){ 
            if(err){
                alert("ERROR "+err['message']);
            }else{
                that.all_products = res['all_products'];
                that.categs=res['categs'];
                that.prod_categ=that.categs['prod_categ'];
                that.all_categs=that.categs['all_categs'];
                that.nav_categs=that.categs['nav_categs'];
                that.total_amount=that.sub_total+res['tax_amount'];
                var items=_.sortBy(that.items,'create_sec');
                items=items.reverse();
                var data={
                    'items': items,
                    'sub_total': that.sub_total,
                    'tax_total': res['tax_amount'],
                    'total_amount': that.total_amount,
                    'to_pay' : that.to_pay,
                    'change' : that.change,
                    'prod_categ': that.prod_categ,
                    'is_select_categ': that.is_select_categ,
                    'all_categs': that.all_categs,
                    'is_see_large': that.is_see_large,
                    'nav_categs' : that.nav_categs,
                    'flash': that.flash,
                    'is_pay' : that.is_pay,
                    'dbname': res['dbname'],
                    'contact_name' : res['contact_name'],
                    'contact_phone' : res['contact_phone'],
                    'contact_id' : that.contact_id
                };
                if(that.categ_id){
                    that.product_in_categ=res['product_in_categ']['products'];
                    that.categ_name=res['product_in_categ']['categ_name'];
                    that.nav_products=res['product_in_categ']['nav_products'];
                    data['products']=that.product_in_categ;
                    data['categ_name']=that.categ_name;
                    data['nav_products']=that.nav_products;
                }
                var html=that.template(data);
                that.$el.html(html);
                that.hide_pb=false;
                that.flash=null;

                /*search product*/
                that.$el.find("input[name=search-product]").typeahead({
                    source: function(query,process){
                        vals=[];
                        map={};
                        var products=that.all_products;
                        $.each(products,function(index,model){
                            map[model.name]=model
                            vals.push(model.name);
                        });
                        process(vals);

                    },
                    matcher: function(item) {
                        if (item.toLowerCase().indexOf(this.query.trim().toLowerCase()) != -1) {
                            return true;
                        }
                    },
                    },{
                    hint: true,
                    hilight : true,
                    minLength: 1,

                });
            }
        });
    },
});
var LayoutView=Backbone.View.extend({
    template: Handlebars.templates.layout,
    events: {
        'click .change-head': 'change_head',
        'click .btn-logout': 'btn_logout',
        'click .btn-settings': 'btn_settings',
    },

    initialize: function(options) {
        this.content=options.content;
        Backbone.View.prototype.initialize.call(this,options);
        this.nf_model='pos.interface';
        this.hide_pb=false;
    },

    btn_settings:function(e){
        console.log("LayoutView.btn_settings");
        e.preventDefault();
        $(e.target).removeClass("gly-spin");
        var that=this;
        var args={
        }
        var view=new SettingView(args);
        view.render();
        $('.modal').remove();
        $('body').append(view.el);
        $('.modal').fadeIn();
        view.$el.modal();
        view.on("close_setting",function(args,opts){
            location.reload();
        });
    },

    btn_logout:function(e){
        console.log("LayoutView.btn_logout");
        var cookies=get_cookies();
        for(var i in cookies){
            var cookie=cookies[i];
            document.cookie = cookie +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        }
        document.cookie = 'login' +'=;Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        document.cookie = 'password' +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        location.reload();
        var host=window.location.origin;
        var url_login=host+"#login";
        window.location.href=url_login;
    },


    change_head:function(e){
        e.preventDefault();
        console.log("LayoutView.change_head");
        var that=this;
        var color=$(e.target).text();
        that.hide_pb=true;
        var args={
            'color' : color
        };
        var options={};
        rpc_execute(that.nf_model,"change_theme",[args],options,function(err,res){                                                                
            if(err){alert("Error "+err['message'])}
            else{that.render();}
        });

    },
    
    render: function(cb) {
        console.log("LayoutView.render");
        var that=this;
        var cashier_id = window.localStorage.getItem("cashier_id");
        var url = window.location.hash.substring(1);
        var args={
            'hide_pb' : that.hide_pb,
            'company_id' : get_cookie('company_id'),
            'cashier_id' : cashier_id,
            'url' : url,
        };
        var options={};
        rpc_execute(that.nf_model,"generals",[args],options,function(err,res){                                                                
            if(err){
                alert("ERROR "+err['message']);
            }else{
                var theme = window.localStorage.getItem("theme");
                if(!theme){
                    var theme='lightblue';
                }
                // javascript should not have comma in last JSON
                var comp_encode = decodeURIComponent(get_cookie('company_name'));
                var data={
                    'version': res['version'],
                    'company_name': comp_encode,
                    'dbname': res['dbname'],
                    'user_name' : get_cookie('user_name'),
                    'menu'  :res['menu']
                };
                if(res['cashier_name']){
                    data['cashier_name']=res['cashier_name'];
                }
                var theme_color = theme;
                var html=that.template(data);
                that.$el.html(html);
                that.$el.find(".content").append(that.content);
                document.getElementById("pos-head").style.background = theme_color;
            }
        });
    },
});
var LoginView=Backbone.View.extend({
    template: Handlebars.templates.login,
    events: {
        'click .btn-login' : 'btn_login',
        'click .forget-pass' : 'forget_password'
    },

    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.nf_model="pos.interface";
        this.flash=null;
    },

    forget_password:function(e){
        e.preventDefault();
        console.log("LoginView.forget_password");
        window.location.href=get_host()+"/ui#name=forgot_passwd";

    },

    btn_login:function(e){
        e.preventDefault();
        console.log("LoginView.btn_login");
        var that=this;
        var username=$("#user").val();
        var password=$("#pwd").val();
        if(!username){
            that.flash={
                'type': 'danger',
                'message': 'Please define username',
            }
            that.render();
            return true;
        }
        if(!password){
            that.flash={
                'type': 'danger',
                'message': 'Please define password',
            }
            that.render();
            return true;
        }
        var args={
            'login' : username,
            'password' :password,
            'click_login' : true
        };
        if(!that.a_db){args['database']=$("#select-database").val();}
        var options={};
        rpc_execute(that.nf_model,"login",[args],options,function(err,res){ 
            if(err){
                that.flash={
                    'type': 'danger',
                    'message': err['message'],
                }
                that.render();
                return true;
            }else{
                var cookies=res['cookies'];
                var now=new Date();
                now.setDate(now.getDate()+60);
                var expires=now.toGMTString();
                var str='';
                var all_cookie=get_cookies();
                for(var i in all_cookie){
                    var cookie=all_cookie[i];
                    document.cookie = cookie +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
                }
                /*document.cookie = 'login' +'=;Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';*/
                /*document.cookie = 'password' +'=;Path=/;Expires=Thu, 01 Jan 1970 00:00:01 GMT;';*/
                var remember= document.getElementById("remember").checked;
                for(cookie in cookies){
                    var val=cookies[cookie];
                    str+=cookie+":"+val+",";
                    document.cookie=cookie+"="+val+";expires="+expires+";path=/";
                }
                window.location.href=get_host()+"/static/pos/index.html#";
            }
        });
    },
    render: function(cb) {
        console.log("LoginView.render");
        var that=this;
        var args={};
        var options={};
        rpc_execute(that.nf_model,"get_database",[args],options,function(err,res){ 
            that.a_db = res['a_db'];
            var data={
                'flash' : that.flash,
                'dbs' : res['dbs'],
                'a_db' : that.a_db
            };
            var html=that.template(data);
            that.$el.html(html);
        });
    },
});
var ProgressbarView=Backbone.View.extend({
    template: Handlebars.templates.progressbar,
    className: "modal",
    events: {
    },

    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.content=options.content;
    },

    render: function(cb) {
        console.log("ProgressbarView.render");
        var that=this;
        var data={
            'content': that.content,
        };
        var html=that.template(data);
        that.$el.html(html);
    },
});
var RetreiveSaleView=Backbone.View.extend({
    template: Handlebars.templates.retreive_sale,
    events: {
    },

    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.nf_model='pos.retreive.sale';
        this.hide_pb=false;
        this.flash=null;
    },

    render: function(cb) {
        console.log("RetreiveSale.render");
        var that=this;
        var args={
            'hide_pb' : that.hide_pb,
        };
        var options={};
        rpc_execute(that.nf_model,"get_retreive_sale",[args],options,function(err,res){ 
            if(err){
                alert("ERROR "+err['message']);
            }else{
                var data={
                };
                var html=that.template(data);
                that.$el.html(html);
                that.hide_pb=false;
                that.flash=null;
            }
        });
    },
});
var SearchCustomerView=Backbone.View.extend({
    template: Handlebars.templates.search_customer,
    className: "modal",
    events: {
        'click .btn-popup-search-customer': 'search_customer',
        'click .btn-cancel': 'cancel',
        'click .select-contact': 'select_contact',
    },


    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.input=options.input;
        this.nf_model="pos.interface";
        this.flash=null;
        this.contacts=[];
        this.is_search=false;
    },

    select_contact:function(e){
        console.log("Search Customer.select_contact");
        e.preventDefault();
        var that = this;
        var contact_id = $(e.target).parents("tr").data("id");
        for(var i=0;i<=that.contacts.length;i++){
            var id = that.contacts[i]['id'];
            if(contact_id==id){
                $("#contact-id").val(contact_id);
                $("#contact-name").text(that.contacts[i]['name']);
                $("#contact-phone").text(that.contacts[i]['phone']);
                $('.in').fadeOut();
                break;
            }
        }
    },

    cancel:function(e){
        console.log("Search Customer.cancel");
        e.preventDefault();
        var that = this;
        var args ={};
        var opts={};
        $('.in').fadeOut();
        /*$('.in').remove();*/
    },

    search_customer:function(e){
        console.log("Seach Customer.click search_customer");
        e.preventDefault();
        var that = this;
        var args ={};
        var opts={};
        that.is_search=true;
        that.render();
    },

    render: function(cb) {
        console.log("SettingView.render");
        var that=this;
        if(that.is_search){
            that.input = $("#popup-search-customer").val();
            if(!that.input){
                 that.flash={
                    'type': 'danger',
                    'message': 'Please define for search customer',
                }
            }
        }
        var args={
            'hide_pb': true,
            'input' : that.input,
        };
        var options={};
        rpc_execute(that.nf_model,"get_contacts",[args],options,function(err,res){                                                                
            var data={
                'flash' : that.flash,
                'input' : that.input
            };
            if(res['contacts']){
                data['contacts']=res['contacts'];
                that.contacts=res['contacts'];
            }
            var html=that.template(data);
            that.$el.html(html);
            that.flash=null;
        });
    },
});
var SettingView=Backbone.View.extend({
    template: Handlebars.templates.setting,
    className: "modal",
    events: {
        'click .btn-backend': 'go_backend',
        'click .btn-update': 'update',
        'click .btn-cancel': 'cancel',
    },


    initialize: function(options) {
        Backbone.View.prototype.initialize.call(this,options);
        this.message=options.message;
        this.title=options.title;
        this.nf_model="pos.interface";
    },

    cancel:function(e){
        console.log("Settings.cancel");
        e.preventDefault();
        var that = this;
        var args ={};
        var opts={};
        $('.in').fadeOut();
        /*$('.in').remove();*/
    },

    update:function(e){
        console.log("Settings.update");
        e.preventDefault();
        var that = this;
        var theme = $('#select-theme').val();
        var cashier_id = $('#select-cashier').val();
        window.localStorage.setItem("theme", theme);
        window.localStorage.setItem("cashier_id", cashier_id);
        var args ={};
        var opts={};
        that.trigger('close_setting',args,opts);
    },

    go_backend:function(e){
        console.log("Settings.go_back");
        e.preventDefault();
        var host=window.location.origin;
        var url_pos=host+"/ui#name=pos_board";
        window.location.href=url_pos;
        
    },

    render: function(cb) {
        console.log("SettingView.render");
        var that=this;
        var args={
            'hide_pb': true,
        };
        var options={};
        var theme = window.localStorage.getItem("theme");
        rpc_execute(that.nf_model,"get_settings",[args],options,function(err,res){                                                                
            if(err){
                alert("ERROR "+err['message']);
            }
            var data={
                'comps' : res['comps'],
                'cashiers' : res['cashier']
            };
            var html=that.template(data);
            that.$el.html(html);
        });
    },
});
