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

class CompleteSale(Model):
    _name = "pos.complete.sale"
    _store = False

    def get_complete_sale(self, params={}, context={}):
        print_color("Complete Sale params %s"%(params),'blue')
        sale_id = params.get("sale_id")
        check_sale_ids=params.get("check_sale_ids")
        sale_orders=[]
        sale_order=[]
        lines=[]
        customer_name = None
        customer_phone = None
        amount_total = None
        date = time.strftime("%Y-%m-%d")
        dom =[
            ['date','<=',date+' 23:59:59'],
            ['date','>=',date+' 00:00:00'],
            ['state','=','confirmed']
        ]
        for sale in get_model("sale.order").search_browse(dom):
            if check_sale_ids and str(sale.id) in check_sale_ids:
                sale.done()
                continue
            sale_orders.append({
                'sale_id' : sale.id,
                'number' : sale.number,
                'customer_name' : sale.contact_id.name,
                'total' : sale.amount_total
            })
        if sale_id:
            obj = get_model("sale.order").browse(int(sale_id))
            customer_name=obj.contact_id.name
            customer_phone=obj.contact_id.phone
            amount_total=obj.amount_total
            #line in sale
            for line in obj.lines:
                lines.append({
                    'product_name' : line.product_id.name,
                    'qty' : line.qty,
                    'uom' : line.uom_id.name,
                    'unit_price' : line.unit_price,
                    'amount' : line.amount
                })
            sale_order.append({
                'customer' : obj.contact_id.name,
                'lines' : lines,
            })
                

        return  {
            'sale_orders' : sale_orders,
            'sale_order' : lines,
            'customer_name' : customer_name,
            'customer_phone' : customer_phone,
            'amount_total' : amount_total,
        }



CompleteSale.register()
