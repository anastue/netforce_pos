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
