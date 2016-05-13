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
