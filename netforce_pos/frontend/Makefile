
all: ../static/pos/js/templates.js ../static/pos/js/views.js

clean:
	rm -f ../static/pos/js/templates.js
	rm -f ../static/pos/js/views.js

../static/pos/js/templates.js: templates/*.hbs
	handlebars -f $@ -e hbs $^

../static/pos/js/views.js: views/*.js
	cat $^ > $@

