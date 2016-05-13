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

from netforce.model import Model, fields


class Register(Model):
    _name = "pos.register"
    _string = "Register"

    _fields = {
        "shop_id": fields.Many2One("pos.shop", "Shop", required=True, search=True),
        "name": fields.Char("Name", required=True),
        "ask_note": fields.Boolean("Ask for Note"),
        "print_receipt": fields.Boolean("Print Receipt"),
        "print_note_receipt": fields.Boolean("Print Note On Receipt"),
        "show_discount": fields.Boolean("Show discounts On Receipts"),
        "state": fields.Selection([['closed', 'Closed'], ['open', 'Open']], "Status"),
        "user_id": fields.Many2One("base.user", "User", required=True, search=True),
        'theme' : fields.Selection([
                ["blue","Blue"],
                ["pink","Pink"],
                ["lightblue","Light Blue"],
                ["orange","Orange"],
                ["red","Red"],
                ["black","Black"],
                ["grey","Grey"],
                ],"POS Theme"),
    }

    _defaults = {
        "state": "closed",
    }

Register.register()
