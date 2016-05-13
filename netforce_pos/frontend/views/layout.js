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
