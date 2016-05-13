(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['complete_sale'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n         <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n        <div class=\"alert alert-success\" role=\"alert\">\n    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n            <div class=\"alert alert-danger\" role=\"alert\">\n        ";
  }

function program7(depth0,data) {
  
  
  return "\n            <div class=\"alert\" role=\"alert\">\n        ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sale_orders), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <tr data-id=\"";
  if (helper = helpers.sale_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sale_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                <!--check box-->\n                                <td class=\"sale-id\"><span><input type=\"checkbox\" value=\"";
  if (helper = helpers.sale_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.sale_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></span></td>\n                                <!--number-->\n                                <td class=\"select-sale-order\">";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                <!--customer-->\n                                <td class=\"select-sale-order\">";
  if (helper = helpers.customer_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                            </tr>\n                        ";
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "\n                        <tr>\n                            Nothing sale order\n                        </tr>\n                    ";
  }

function program14(depth0,data) {
  
  
  return "\n            <div style=\"padding-top:30px\">\n                <button class=\"btn btn-success btn-lg btn-complete-sale\"><b>Complete</b></button>\n            </div>\n        ";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.sale_order), {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <tr>\n                                <td>";
  if (helper = helpers.product_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.product_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td> <!--Product-->\n                                <td>";
  if (helper = helpers.qty) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.qty); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td> <!--Qty-->\n                                <td>";
  if (helper = helpers.uom) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.uom); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td> <!--UoM-->\n                                <td>";
  if (helper = helpers.unit_price) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.unit_price); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td> <!--Unit Price-->\n                                <td>";
  if (helper = helpers.amount) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td> <!--Amount-->\n                            </tr>\n                        ";
  return buffer;
  }

function program19(depth0,data) {
  
  
  return "\n                        <tr>\n                            <td>\n                            Nothing detail\n                            </td>\n                        </tr>\n                    ";
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"row\" style=\"padding:30px\">\n    <!--left-->\n    <div class=\"col-sm-5\">\n        <div>\n            <table class=\"table table-hover\">\n                <thead>\n                    <th class=\"check-all-sale-order\"><span><input id=\"check-all\" type=\"checkbox\" value=\"\"></span></th>\n                    <th><span class=\"text\">Number</span></th>\n                    <th><span class=\"text\">Customer</span></th>\n                </thead>\n            </table>\n        </div>\n        <div style=\"height:400px;overflow:auto\">\n            <table class=\"table table-hover\">\n                 <tbody>\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sale_orders), {hash:{},inverse:self.program(12, program12, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                 <tbody>\n            </table>\n        </div>\n        <!--div for button-->\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sale_orders), {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div> <!-- left -->\n    <!--right-->\n    <div class=\"col-sm-7\">\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <strong>Customer :</strong> ";
  if (helper = helpers.customer_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </div>\n            <div class=\"col-sm-6\">\n                <strong>Amount Total :</strong> ";
  if (helper = helpers.amount_total) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.amount_total); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <strong>Phone :</strong> ";
  if (helper = helpers.customer_phone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.customer_phone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n            </div>\n        </div>\n\n        <div style=\"padding-top:40px\">\n            <table class=\"table table-hover\">\n                <thead style=\"background-color:#6d6d6d;color:white\">\n                    <th>Product</th>\n                    <th>Qty</th>\n                    <th>UoM</th>\n                    <th>Unit Price</th>\n                    <th>Amount</th>\n                </thead>\n                <tbody>\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.sale_order), {hash:{},inverse:self.program(19, program19, data),fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div><!-- row-->\n";
  return buffer;
  });
templates['current_sale'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n         <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n        <div class=\"alert alert-success\" role=\"alert\">\n    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n            <div class=\"alert alert-danger\" role=\"alert\">\n        ";
  }

function program7(depth0,data) {
  
  
  return "\n            <div class=\"alert\" role=\"alert\">\n        ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                     ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                      ";
  return buffer;
  }
function program10(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                         <tr data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                              <td style=\"vertical-align:middle\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                              <td><input type=\"text\" name=\"item_qty\" class=\"form-control\" style=\"text-align:right;background-color:lightblue\" value=\"";
  if (helper = helpers.qty) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.qty); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\"></td>\n                              <td style=\"text-align:right;vertical-align:middle\">"
    + escapeExpression((helper = helpers.currency || (depth0 && depth0.currency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.price), options) : helperMissing.call(depth0, "currency", (depth0 && depth0.price), options)))
    + "</td>\n                              <td class=\"remove-line\" style=\"text-align:right;width:3%;vertical-align:middle\"><span class=\"glyphicon glyphicon-remove\" style=\"color:red;cursor:pointer\" aria-hidden=\"true\"/></td>\n                          </tr>\n                      ";
  return buffer;
  }

function program12(depth0,data) {
  
  
  return "\n                          <tr><td colspan=\"3\">No sale</td></tr>\n                      ";
  }

function program14(depth0,data) {
  
  
  return "\n                <button class=\"btn btn-success btn-lg btn-pay-confirm\" style=\"width:40%\"><b>Confirm</b></button>\n            ";
  }

function program16(depth0,data) {
  
  
  return "\n                <button class=\"btn btn-success btn-lg btn-pay\" style=\"width:40%\"><b>Pay</b></button>\n            ";
  }

function program18(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <li data-id=\"";
  if (helper = helpers.categ_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" ><a href=\"#\" class=\"select-categ\" >";
  if (helper = helpers.categ_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " &nbsp;<span class=\"badge\">";
  if (helper = helpers.total_prod) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total_prod); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span></a></li>\n                    ";
  return buffer;
  }

function program20(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                <li><a href=\"#\">";
  if (helper = helpers.categ_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n                <button type=\"button\" class=\"btn btn-default btn-md pull-right btn-back\"><b>Back</b></button>\n            ";
  return buffer;
  }

function program22(depth0,data) {
  
  
  return "\n                        <li class=\"active\"><a href=\"#\" aria-label=\"Previous\"><span class=\"glyphicon glyphicon-th\" aria-hidden=\"true\"></span></a></li>\n                        <li class=\"see-small\"><a href=\"#\" aria-label=\"Previous\"><span class=\"glyphicon glyphicon-align-justify\" aria-hidden=\"true\"></span></a></li>\n                    ";
  }

function program24(depth0,data) {
  
  
  return "\n                        <li class=\"see-large\"><a href=\"#\" aria-label=\"Previous\"><span class=\"glyphicon glyphicon-th\" aria-hidden=\"true\"></span></a></li>\n                        <li class=\"active\"><a href=\"#\" aria-label=\"Previous\"><span class=\"glyphicon glyphicon-align-justify\" aria-hidden=\"true\"></span></a></li>\n                    ";
  }

function program26(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <!-- Products -->\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_see_large), {hash:{},inverse:self.program(36, program36, data),fn:self.program(27, program27, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program27(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div style=\"margin-right:5px;height:300px;overflow:auto;\">\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.products), {hash:{},inverse:self.program(34, program34, data),fn:self.program(28, program28, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </div>\n            ";
  return buffer;
  }
function program28(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.products), {hash:{},inverse:self.noop,fn:self.program(29, program29, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program29(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <div class=\"col-xs-6 col-md-3\" data-id=\"";
  if (helper = helpers.prod_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                <a href=\"#\" class=\"thumbnail select-product\">\n                                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prod_img), {hash:{},inverse:self.program(32, program32, data),fn:self.program(30, program30, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                    <span class=\"label label-default\">\n                                        ";
  if (helper = helpers.prod_code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.prod_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\n                                    </span>\n                                </a>\n                            </div>\n                        ";
  return buffer;
  }
function program30(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                        <img alt=\"";
  if (helper = helpers.prod_code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.prod_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" src=\"/static/db/";
  if (helper = helpers.dbname) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.dbname); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "/files/";
  if (helper = helpers.prod_img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width:100px;height:100px;\"></img>\n                                    ";
  return buffer;
  }

function program32(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                        <img alt=\"";
  if (helper = helpers.prod_code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (helper = helpers.prod_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" src=\"img/pos.png\" style=\"width:100px;height:100px;\"></img>\n                                    ";
  return buffer;
  }

function program34(depth0,data) {
  
  
  return "\n                        <div style=\"text-align:center\">\n                            No product in this category.\n                        </div>\n                    ";
  }

function program36(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <table class=\"table table-hover\">\n                    <thead>\n                        <th>Products</th>\n                        <th>Qty</th>\n                    </thead>\n                    <tbody>\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.products), {hash:{},inverse:self.program(40, program40, data),fn:self.program(37, program37, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </tbody>\n                </table>\n            ";
  return buffer;
  }
function program37(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.products), {hash:{},inverse:self.noop,fn:self.program(38, program38, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  return buffer;
  }
function program38(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                <tr data-id=\"";
  if (helper = helpers.prod_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                    <td class=\"select-product\">";
  if (helper = helpers.prod_code) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_code); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " ";
  if (helper = helpers.prod_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.prod_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                    <td class=\"select-product\">1</td>\n                                </tr>\n                            ";
  return buffer;
  }

function program40(depth0,data) {
  
  
  return "\n                            <tr>\n                                <td>No product in this category.</td>\n                            </tr>\n                        ";
  }

function program42(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <!-- product categories -->\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_see_large), {hash:{},inverse:self.program(52, program52, data),fn:self.program(43, program43, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        ";
  return buffer;
  }
function program43(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prod_categ), {hash:{},inverse:self.program(50, program50, data),fn:self.program(44, program44, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            ";
  return buffer;
  }
function program44(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.prod_categ), {hash:{},inverse:self.noop,fn:self.programWithDepth(45, program45, data, depth0),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                ";
  return buffer;
  }
function program45(depth0,data,depth1) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                        <div class=\"col-xs-6 col-md-3\" data-id=\"";
  if (helper = helpers.categ_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                <a href=\"#\" class=\"thumbnail select-categ\">\n                                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.categ_img), {hash:{},inverse:self.program(48, program48, data),fn:self.programWithDepth(46, program46, data, depth1),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                    <span>\n                                        ";
  if (helper = helpers.categ_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + " <span class=\"badge\">";
  if (helper = helpers.total_prod) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total_prod); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n                                    </span>\n                                </a>\n                            </span>\n                        </div>\n                    ";
  return buffer;
  }
function program46(depth0,data,depth2) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                        <img alt=\"";
  if (helper = helpers.categ_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" src=\"/static/db/"
    + escapeExpression(((stack1 = (depth2 && depth2.dbname)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/files/";
  if (helper = helpers.categ_img) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_img); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" style=\"width:100px;height:100px;\"></img>\n                                    ";
  return buffer;
  }

function program48(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                        <img alt=\"";
  if (helper = helpers.categ_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" src=\"img/pos.png\" style=\"width:100px;height:100px;\"></img>\n                                    ";
  return buffer;
  }

function program50(depth0,data) {
  
  
  return "\n                    <span style=\"text-align:center\"> No Category </span>\n                ";
  }

function program52(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <table class=\"table table-hover\">\n                    <thead>\n                        <th>Category</th>\n                        <th style=\"text-align:center\">Product in Category</th>\n                    </thead>\n                    <tbody>\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.prod_categ), {hash:{},inverse:self.program(56, program56, data),fn:self.program(53, program53, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </tbody>\n                </table>\n            ";
  return buffer;
  }
function program53(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.prod_categ), {hash:{},inverse:self.noop,fn:self.program(54, program54, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  return buffer;
  }
function program54(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                <tr data-id=\"";
  if (helper = helpers.categ_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                    <td class=\"select-categ-tr\">";
  if (helper = helpers.categ_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.categ_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                    <td class=\"select-categ-tr\" style=\"text-align:center\">";
  if (helper = helpers.total_prod) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.total_prod); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                </tr>\n                            ";
  return buffer;
  }

function program56(depth0,data) {
  
  
  return "\n                            <tr>\n                                No Category\n                            </tr>\n                        ";
  }

function program58(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <nav>\n                <ul class=\"pagination\">\n                    <li class=\"nav-first-product\"><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.nav_products), {hash:{},inverse:self.noop,fn:self.program(59, program59, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <li class=\"nav-last-product\"><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>\n                </ul>\n            </nav>\n        ";
  return buffer;
  }
function program59(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current), {hash:{},inverse:self.program(62, program62, data),fn:self.program(60, program60, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program60(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <li class=\"active nav-select-product\"><a href=\"#\">";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"sr-only\"></span></a></li>\n                        ";
  return buffer;
  }

function program62(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <li class=\"nav-select-product\"><a href=\"#\">";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"sr-only\"></span></a></li>\n                        ";
  return buffer;
  }

function program64(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <nav>\n                <ul class=\"pagination\">\n                    <li class=\"nav-first-categ\"><a href=\"#\" aria-label=\"Previous\"><span aria-hidden=\"true\">&laquo;</span></a></li>\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.nav_categs), {hash:{},inverse:self.noop,fn:self.program(65, program65, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    <li class=\"nav-last-categ\"><a href=\"#\" aria-label=\"Next\"><span aria-hidden=\"true\">&raquo;</span></a></li>\n                </ul>\n            </nav>\n        ";
  return buffer;
  }
function program65(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.current), {hash:{},inverse:self.program(68, program68, data),fn:self.program(66, program66, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program66(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <li class=\"active nav-select-categ\"><a href=\"#\">";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"sr-only\"></span></a></li>\n                        ";
  return buffer;
  }

function program68(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <li class=\"nav-select-categ\"><a href=\"#\">";
  if (helper = helpers.number) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.number); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "<span class=\"sr-only\"></span></a></li>\n                        ";
  return buffer;
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"row\">\n    <div class=\"col-sm-5\">\n        <div class=\"col-sm-12\" style=\"padding-right:0px;\">\n            <div class=\"input-group\" style=\"padding-top:10px\">\n                <input placeholder=\"Search Product\" type=\"text\" name=\"search-product\" class=\"form-control\" style=\"height:35px;\">\n                    <span class=\"input-group-addon btn btn-search-product\" style=\"cursor:pointer\">\n                    <span class=\"glyphicon glyphicon-search\"></span>\n                </input>\n            </div>\n        </div>\n        <div class=\"col-sm-12\" style=\"margin-top:10px;margin-bottom:15px;height:180px;overflow:auto;\">\n            <table class=\"table table-hover\">\n                <thead>\n                    <th style=\"width:50%\">Product</th>\n                    <th style=\"width:20%;text-align:right\">QTY</th>\n                    <th style=\"text-align:right\">Price</th>\n                </thead>\n                <tbody>\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.program(12, program12, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </tbody>\n            </table>\n        </div>\n    <!-- summary -->\n    <div class=\"col-sm-12\">\n        <div class=\"col-sm-6\" style=\"padding-left:0px;\">\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" name=\"search-customer\" placeholder=\"Search Customer\">\n                    <span class=\"input-group-addon btn btn-search-customer\" style=\"cursor:pointer\">\n                    <span class=\"glyphicon glyphicon-plus-sign\"></span>\n                </input>\n            </div>\n            <table class=\"table pos-summary\">\n                <thead>\n                    <th style=\"width:40%\"></th>\n                    <th style=\"width:60%\"></th>\n                </thead>\n                <tbody id=\"contact-id\" value=\"";
  if (helper = helpers.contact_id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contact_id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                    <tr>\n                        <td style=\"text-align:right\"><b>Name</b></td>\n                        <td style=\"text-align:right\" id=\"contact-name\">";
  if (helper = helpers.contact_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contact_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align:right\"><b>Phone</b></td>\n                        <td style=\"text-align:right\" id=\"contact-phone\">";
  if (helper = helpers.contact_phone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.contact_phone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align:right\"><b>Level</b></td>\n                        <td id=\"contact-level\" style=\"text-align:right\"></td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align:right\"><b>Point</b></td>\n                        <td id=\"contact-point\" style=\"text-align:right\"></td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n        <div class=\"col-sm-6\" style=\"padding-left:0px;\">\n            <table class=\"table pos-summary\">\n                <thead>\n                    <th style=\"width:40%\"></th>\n                    <th style=\"width:60%\"></th>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td style=\"text-align:right\">Subtotal </td>\n                        <td style=\"text-align:right\">"
    + escapeExpression((helper = helpers.currency || (depth0 && depth0.currency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.sub_total), options) : helperMissing.call(depth0, "currency", (depth0 && depth0.sub_total), options)))
    + "</td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align:right\">Tax </td>\n                        <td style=\"text-align:right\">"
    + escapeExpression((helper = helpers.currency || (depth0 && depth0.currency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.tax_amount), options) : helperMissing.call(depth0, "currency", (depth0 && depth0.tax_amount), options)))
    + "</td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align:right;border-bottom: 2px solid #929292;\"><strong>TOTAL</strong></td>\n                        <td style=\"text-align:right;border-bottom: 2px solid #929292;\">"
    + escapeExpression((helper = helpers.currency || (depth0 && depth0.currency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.total_amount), options) : helperMissing.call(depth0, "currency", (depth0 && depth0.total_amount), options)))
    + "</td>\n                    </tr>\n                    <tr>\n                        <td></td>\n                        <td></td>\n                    </tr>\n                    <tr>\n                        <td type=\"text\" style=\"text-align:right;vertical-align: middle;\"><strong>TO PAY</strong></td>\n                        <td><input class=\"form-control\" style=\"text-align:right;\" type=\"text\" value=\"";
  if (helper = helpers.to_pay) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.to_pay); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" name=\"to_pay\"/></td>\n                    </tr>\n                    <tr>\n                        <td style=\"text-align:right\">Change</td>\n                        <td style=\"text-align:right\">"
    + escapeExpression((helper = helpers.currency || (depth0 && depth0.currency),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.change), options) : helperMissing.call(depth0, "currency", (depth0 && depth0.change), options)))
    + "</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div><!--col6-->\n    </div><!--col12-->\n\n    <!-- all button -->\n        <div class=\"col-sm-12\">\n            <button class=\"btn btn-primary btn-lg\"><b>Void</b></button>\n            <button class=\"btn btn-primary btn-lg\"><b>Park</b></button>\n            <!--<button class=\"btn btn-primary btn-lg\"><b>Notes</b></button>-->\n            <button class=\"btn btn-danger btn-lg\"><b>Disc</b></button>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_pay), {hash:{},inverse:self.program(16, program16, data),fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n\n    <!-- products -->\n    <div class=\"col-sm-7\" style=\"padding-top:10px;\">\n        <ul class=\"nav nav-tabs\">\n            <li class=\"active dropdown\">\n                <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">Categories\n                    <span class=\"caret\"></span>\n                </a>\n                <ul class=\"dropdown-menu scrollable-menu\">\n                    <li data-id=\"all\"><a href=\"#\" class=\"select-categ\" >All Products&nbsp;</a></li>\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.all_categs), {hash:{},inverse:self.noop,fn:self.program(18, program18, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </li>\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_select_categ), {hash:{},inverse:self.noop,fn:self.program(20, program20, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <nav class=\"pull-right\" style=\"margin-top:-3%;padding-right:2%\">\n                <ul class=\"pagination\">\n                    ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_see_large), {hash:{},inverse:self.program(24, program24, data),fn:self.program(22, program22, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                </ul>\n            </nav>\n        </ul>\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_select_categ), {hash:{},inverse:self.program(42, program42, data),fn:self.program(26, program26, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    <!-- pagination -->\n    <div class=\"footer\" style=\"text-align:center\">\n        <div class=\"col-sm-6\">\n        </div>\n        <div class=\"col-sm-6\">\n        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.is_select_categ), {hash:{},inverse:self.program(64, program64, data),fn:self.program(58, program58, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        </div>\n    </div>\n</div><!-- row-->\n";
  return buffer;
  });
templates['layout'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                    <li role=\"presentation\" class=\"active\">\n                                        <a><strong>Cashier : </strong>";
  if (helper = helpers.cashier_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.cashier_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n                                    </li>\n                                ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.active), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        <!--<li><a href=\"#\">Retreive Sale</a></li>-->\n                        <!--<li><a href=\"#\">Complete Sale</a></li>-->\n                    ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <li class=\"active\"><a href=\"#";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n                        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                            <li><a href=\"#";
  if (helper = helpers.key) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.key); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.value) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.value); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a></li>\n                        ";
  return buffer;
  }

  buffer += "<div class=\"row pos-header\" id=\"pos-head\" style=\"background-color:#9b58b5\">\n    <div class=\"col-sm-12\">\n        <table class=\"table pos-table-title\">\n            <tbody>\n                <tr>\n                    <td style=\"width:50%\"><small>V. ";
  if (helper = helpers.version) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.version); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</small>\n                        <big>&nbsp;";
  if (helper = helpers.company_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.company_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</big>\n                    </td>\n                    <td>\n                        <div class=\"\" style=\"font-size:small\">\n                            <ul class=\"nav nav-pills nav-user-menu\">\n                                ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.cashier_name), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                                <li role=\"presentation\" class=\"active\">\n                                    <a >";
  if (helper = helpers.user_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</a>\n                                </li>\n                                <li class=\"btn-settings\" role=\"presentation\"><a href=\"#\">Settings</a></li>\n                                <li class=\"btn-logout\" role=\"presentation\"><a href=\"#\">Logout</a></li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div class=\"col-sm-12\">\n      <div class=\"container\" style=\"width:100%;padding:0px;\">\n          <nav class=\"navbar navbar-default nav-pos\" role=\"navigation\">\n              <div class=\"container\">\n                <div class=\"navbar-header\">\n                  <a class=\"navbar-brand\" href=\"#\">Netforce POS</a>\n                  <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                  </button>\n                </div>\n                <div class=\"navbar-header pull-right\">\n                </div>\n                <div class=\"navbar-collapse collapse\">\n                  <ul class=\"nav navbar-nav\">\n                    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.menu), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                  </ul>                    \n                </div>\n              </div>\n            </nav> \n        </div><!-- container -->\n    </div>\n    <div class=\"col-sm-12 content\">\n    </div>\n</div>\n";
  return buffer;
  });
templates['login'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n         <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n        <div class=\"alert alert-success\" role=\"alert\">\n    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n            <div class=\"alert alert-danger\" role=\"alert\">\n        ";
  }

function program7(depth0,data) {
  
  
  return "\n            <div class=\"alert\" role=\"alert\">\n        ";
  }

function program9(depth0,data) {
  
  
  return "\n            ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                <div class=\"form-group\">\n                    <label style=\"text-align:left\" for=\"database\">Database:</label>\n                    <select class=\"form-control\" id=\"select-database\">\n                        ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.dbs), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </select>                    \n                </div>\n            ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "<option>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>";
  return buffer;
  }

  buffer += "<div class=\"row pos-header\" id=\"pos-head\" style=\"background-color:#9b58b5\">\n    <div class=\"col-sm-12\">\n        <table class=\"table pos-table-title\">\n            <tbody>\n                <tr>\n                    <td>\n                        <div class=\"pull-right\" style=\"font-size:small;margin-right:13%\">\n                            <ul class=\"nav nav-pills nav-user-menu\">\n                              <li role=\"presentation\"><a href=\"#\">Help</a></li>\n                            </ul>\n                        </div>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"pos-login\">\n    <div class=\"col-sm-4\">\n    </div>\n    <div class=\"col-sm-4\">\n        <h1>Welcome To Netforce</h1>\n        <form role=\"form\">\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.a_db), {hash:{},inverse:self.program(11, program11, data),fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"form-group\">\n                <label style=\"text-align:left\" for=\"user\">Name:</label>\n                <input type=\"text\" class=\"form-control\" value=\"";
  if (helper = helpers.user_name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.user_name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" id=\"user\">\n            </div>\n            <div class=\"form-group\">\n                <label for=\"pwd\">Password:</label>\n                <input type=\"password\" class=\"form-control\" id=\"pwd\">\n            </div>\n            <div class=\"checkbox\">\n                <label><input type=\"checkbox\" value=\"\" id=\"remember\">Remember me</label>\n                <label class=\"forget-pass pull-right\"><a href=\"#\">Forgot your password?</a></label>\n            </div>\n            <button class=\"btn btn-lg btn-primary pull-left btn-login\">Log in</button>\n        </form>\n    </div>\n    <div class=\"col-sm-4\">\n    </div>\n</div>\n";
  return buffer;
  });
templates['progressbar'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-body\" style=\"padding-bottom: 0px;\">\n            <div class=\"progress progress-striped active\">\n               <div class=\"progress-bar\"  role=\"progressbar\" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 100%\">\n                  <span>";
  if (helper = helpers.content) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.content); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</span>\n               </div>\n            </div>\n        </div> <!-- body -->\n    </div>\n</div>\n";
  return buffer;
  });
templates['retreive_sale'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n        "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n         <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n    </div>\n";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n        <div class=\"alert alert-success\" role=\"alert\">\n    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n        ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n            <div class=\"alert alert-danger\" role=\"alert\">\n        ";
  }

function program7(depth0,data) {
  
  
  return "\n            <div class=\"alert\" role=\"alert\">\n        ";
  }

  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n<div class=\"row\">\n    <!--left-->\n    <div class=\"col-sm-6\">\n        <h1> Retreive Sale </h1>\n    </div>\n    <!--right-->\n    <div class=\"col-sm-6\">\n    </div>\n</div><!-- row-->\n";
  return buffer;
  });
templates['search_customer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"row\" style=\"margin:5px;\">\n                    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    </div>\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n                        <div class=\"alert alert-success\" role=\"alert\">\n                    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n                            <div class=\"alert alert-danger\" role=\"alert\">\n                        ";
  }

function program7(depth0,data) {
  
  
  return "\n                            <div class=\"alert\" role=\"alert\">\n                        ";
  }

function program9(depth0,data) {
  
  
  return "\n                <div class=\"panel-body\" style=\"padding:0px;\">\n                    <table class=\"table table-hover\" style=\"margin:0px;\">\n                        <thead style=\"background-color:#6d6d6d;color:white\">\n                            <th>Name</th>\n                            <th>Phone</th>\n                        </thead>\n                    </table>\n                </div>\n            ";
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                            ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.contacts), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                        ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                <tr class=\"select-contact\" data-id=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n                                    <td>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                    <td>";
  if (helper = helpers.phone) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.phone); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</td>\n                                </tr>\n                            ";
  return buffer;
  }

  buffer += "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\" style=\"font-size:200%\">&times;</span></button>\n            <h4 class=\"modal-title\">Search Customer</h4>\n        </div>\n        <div class=\"modal-body\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <!--input for search-->\n            <div class=\"row\" style=\"padding:5%\">\n                <div class=\"input-group\" style=\"padding-top:10px\">\n                    <input placeholder=\"Search Customer\" value=\"";
  if (helper = helpers.input) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.input); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" type=\"text\" id=\"popup-search-customer\" class=\"form-control\" style=\"height:35px;\">\n                        <span class=\"input-group-addon btn btn-popup-search-customer\" style=\"cursor:pointer\">\n                        <span class=\"glyphicon glyphicon-search\"></span>\n                    </input>\n                </div>\n            </div>\n            <!--table for header-->\n            ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.contacts), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <!--table for body-->\n            <div class=\"panel-body\" style=\"padding:0px;height:200px; overflow-y:auto;\">\n                <table class=\"table table-hover\" style=\"margin:0px;\">\n                    <!--<thead style=\"background-color:#6d6d6d;color:white\">-->\n                    <!--<th>Name</th>-->\n                    <!--<th>Phone</th>-->\n                    <!--</thead>-->\n                    <tbody>\n                        ";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.contacts), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    </tbody>\n                </table>\n            </div>\n        <!--modal body-->\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default btn-cancel\">Cancel</button>\n        </div>\n    </div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n";
  return buffer;
  });
templates['setting'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                <div class=\"row\" style=\"margin:5px;\">\n                    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "success", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n                        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\n                    </div>\n                </div>\n            ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "\n                        <div class=\"alert alert-success\" role=\"alert\">\n                    ";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\n                        ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.program(7, program7, data),fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.type), "danger", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                    ";
  return buffer;
  }
function program5(depth0,data) {
  
  
  return "\n                            <div class=\"alert alert-danger\" role=\"alert\">\n                        ";
  }

function program7(depth0,data) {
  
  
  return "\n                            <div class=\"alert\" role=\"alert\">\n                        ";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                    <option>";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n                                ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1, helper;
  buffer += "\n                                    <option value=\"";
  if (helper = helpers.id) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.id); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (helper = helpers.name) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.name); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</option>\n                                ";
  return buffer;
  }

  buffer += "<div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\" style=\"font-size:200%\">&times;</span></button>\n            <h4 class=\"modal-title\">POS Settings</h4>\n        </div>\n        <div class=\"modal-body\">\n            ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.flash)),stack1 == null || stack1 === false ? stack1 : stack1.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n            <div class=\"row\" style=\"padding:5%\">\n                <!--\n                <form class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                        <div class=\"control-label col-sm-4\"><strong>Select Company </strong></div>\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\">\n                                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.comps), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            </select>                    \n                        </div>\n                    </div>\n                </form>\n                -->\n                <form class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                        <div class=\"control-label col-sm-4\"><strong>Select Cashier </strong></div>\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" id=\"select-cashier\">\n                                ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.cashiers), {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                            </select>                    \n                        </div>\n                        <div class=\"control-label col-sm-1\"><span></span></div>\n                    </div>\n                </form>\n                <form class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                        <div class=\"control-label col-sm-4\"><strong>Select Theme </strong></div>\n                        <div class=\"col-sm-8\">\n                            <select class=\"form-control\" id=\"select-theme\">\n                                <option>Blue</option>\n                                <option>Pink</option>\n                                <option>Lightblue</option>\n                                <option>Orange</option>\n                                <option>Red</option>\n                                <option>Black</option>\n                                <option>Grey</option>\n                            </select>                    \n                        </div>\n                        <div class=\"control-label col-sm-1\"><span></span></div>\n                    </div>\n                </form>\n                <!--<hr/>-->\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-default btn-backend pull-left\">\n                <span class=\"glyphicon glyphicon-arrow-right\"></span> Go to Backend\n            </button>\n            <button type=\"button\" class=\"btn btn-primary btn-update\">Save changes</button>\n            <button type=\"button\" class=\"btn btn-default btn-cancel\">Cancel</button>\n        </div>\n    </div><!-- /.modal-content -->\n</div><!-- /.modal-dialog -->\n";
  return buffer;
  });
})();