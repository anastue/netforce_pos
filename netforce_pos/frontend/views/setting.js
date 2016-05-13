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
