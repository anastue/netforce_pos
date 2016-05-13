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
