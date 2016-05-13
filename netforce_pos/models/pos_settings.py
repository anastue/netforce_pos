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


class Settings(Model):
    _name = "pos.settings"
    _fields = {
        "contact_id": fields.Many2One("contact", "Contact"),
        "cash_account_id": fields.Many2One("account.account", "Account", condition=[["type", "in", ("bank", "cash", "cheque")]]),
        "sale_ref": fields.Char("Sale Ref.", size=50),
        'pos_theme' : fields.Selection([
                ["blue","Blue"],
                ["pink","Pink"],
                ["lightblue","Light Blue"],
                ["orange","Orange"],
                ["red","Red"],
                ["black","Black"],
                ["grey","Grey"],
                ],"POS Theme"),
    }

Settings.register()
