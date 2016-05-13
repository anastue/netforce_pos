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
