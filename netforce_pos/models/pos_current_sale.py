# Copyright (c) 2012-2015 Netforce Co. Ltd.
# 
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
# 
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
# 
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
# EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
# MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
# IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
# DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
# OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
# OR OTHER DEALINGS IN THE SOFTWARE.
import time
from decimal import Decimal

from netforce.model import Model, get_model
from netforce.utils import print_color
from netforce.database import get_active_db

class CurrentSale(Model):
    _name = "pos.current.sale"
    _store = False

    def get_current_sale(self, params, context={}):
        print('get_current_sale.params ',params)
        print_color("get_current_sale.params%s" % params, "yellow")
        st = get_model("settings").browse(1)
        if params.get("contact_id"):
            contact=get_model("contact").browse(int(params.get("contact_id")))
            contact_name = contact.name
            contact_phone = contact.phone
        else:
            contact_name = st.default_contact_id.name if st.default_contact_id else '' 
            contact_phone = '-'
        ################# < variable > 
        categ_id=params.get("categ_id")
        prod_in_categ=[]
        total_amount=0
        tax_amount=0
        paid_amount=0
        ################# </ variable > 
        sub_total=total_amount
        total_amount=sub_total-tax_amount
        to_pay=total_amount-paid_amount
        ################# < result > 
        if categ_id:
            prod_in_categ=self.get_product_categ(params)
        categs=self.get_categ(params,context)
        ################# </ result > 

        return {
            'product_in_categ':prod_in_categ,
            'total_amount': total_amount,
            'sub_total': sub_total,
            'tax_amount': tax_amount,
            'to_pay': to_pay,
            'categs' : categs,
            'dbname': get_active_db(),
            'all_products': self.get_all_product()['products'],
            'contact_name' : contact_name,
            'contact_phone' : contact_phone,
        }

    def get_product_sale(self, params, context={}):
        print("get_product_sale.params ", params)
        products=get_model('product').search_read([['can_sell','=',True]],limit=30)
        return {
            'products': products,
        }

    def get_product(self, params,context={}):
        print_color("get_product.params%s" % params, "yellow")
        product_id=params.get("product_id")
        prod=get_model('product').browse(product_id)
        item={
            'id': prod.id,
            'name': prod.name,
            'qty': 1,
            'price': prod.sale_price,
        }
        return item

    def get_categ(self, params, contaxt={}):
        print("get_categ.params",params)
        page_categ=params.get("page_categ")
        if page_categ:
            page_categ=int(page_categ)
        is_see_large=params.get("is_see_large")
        prod_categ=[]
        all_categs=[]
        nav_categs=[]
        total_categ=0
        has_next=False
        for categ in get_model('product.categ').search_browse([]):
            categ_name=categ.name
            count_prod = 0
            all_prod = get_model("product").search([['categ_id','=',categ.id]])
            if all_prod : count_prod = len(all_prod)
            all_categs.append({
                'categ_id' : categ.id,
                'categ_name' : categ_name,
                'categ_img' : categ.image,
                'total_prod': count_prod,
                })
            total_categ+=1
            if total_categ>6:
                has_next=True
            if total_categ>(page_categ-1)*8 and total_categ<=(page_categ*8):
                if is_see_large:
                    if len(categ_name)>12:
                        categ_name=categ_name[0:12]+"..."
                prod_categ.append({
                    'categ_id' : categ.id,
                    'categ_name' : categ_name,
                    'categ_img' : categ.image,
                    'total_prod': count_prod,
                    'has_next'  : has_next,
                    })
        mod_categ=total_categ%8
        div_categ=total_categ//8
        if mod_categ>0:
            div_categ=div_categ+1
        for no in range(div_categ):
            current=False
            num=no+1
            if num==page_categ:
                current=True
            nav_categs.append({
                'number': num,
                'current': current,
            })
            
        return {
                'prod_categ' : prod_categ,
                'all_categs' : all_categs,
                'nav_categs': nav_categs,
                }

    def get_product_categ(self, params, contaxt={}):
        print("get_product_categ.params",params)
        products=[]
        nav_products=[]
        total_product=0
        categ_id=params.get("categ_id")
        page_product=params.get("page_product")
        is_see_large=params.get("is_see_large")
        if page_product:
            page_product=int(page_product)
        if categ_id !='all':
            categ=get_model('product.categ').browse(categ_id)
            categ_name=categ.name
            for prod in get_model("product").search_browse([['categ_id','=',categ_id]]):
                total_product+=1
                prod_name=prod.name
                if total_product>(page_product-1)*8 and total_product<=(page_product*8):
                    if is_see_large:
                        if len(prod_name)>12:
                            prod_name=prod_name[0:12]+"..."
                    products.append({
                        'prod_id' : prod.id,
                        'prod_name':prod_name,
                        'prod_img' : prod.image,
                        'categ_name':categ.name,
                        })
        else:
            categ_name="All Products"
            all_prod=get_model("product").search([['can_sell','=',True]])
            total_product=len(all_prod)
            for prod in all_prod[(page_product-1)*8:(page_product*8)]:
                product=get_model("product").browse(prod)
                product_name=product.name
                if is_see_large:
                    if len(product_name)>12:
                        product_name=product_name[0:12]+"..."
                products.append({
                    'prod_id' : prod,
                    'prod_name':product_name,
                    'prod_img' : product.image,
                    'categ_name': categ_name,
                })

        mod_product=total_product%8
        div_product=total_product//8
        if mod_product>0:
            div_product=div_product+1
        for no in range(div_product):
            current=False
            num=no+1
            if num==page_product:
                current=True
            nav_products.append({
                'number': num,
                'current': current,
            })
        return {
            'products' : products,
            'categ_name' : categ_name,
            'nav_products' : nav_products,
            }

    def pay(self, params, context={}):
        print_color("pay.params%s" % params, "yellow")
        contact_id = params.get("contact_id")
        so ={
            'state' : 'confirmed',
            'contact_id':contact_id,
            'due_date' : time.strftime("%Y-%m-%d"),
            'lines' : []
            }
        items = params.get("items")
        for item in items: 
            prod_id = item['id']
            prod = get_model("product").browse(int(prod_id))
            val={
                'product_id' : prod.id,
                'qty' : item['qty'],
                'uom_id' : prod.uom_id.id,
                'description' : prod.description or '-',
                'unit_price': item['price'] or Decimal(0),
            }
            so['lines'].append(('create',val))
        new_so_id=get_model("sale.order").create(so,context={'action_name':'sale_retail_cash'})
        to_pay = params.get("to_pay")
        return True

    def get_all_product(self, params={}, context={}):
        products = []
        for prod in get_model("product").search_browse([['can_sell','=',True]]):
            products.append({
                'id': prod.id,
                'name': prod.name,
                'price': prod.sale_price,
            })
        return  {
            'products' : products
        }

CurrentSale.register()
