﻿namespace Zena.UI {
	export class Util {
		static MAX_UID = 10000000;

		static getUID(prefix: string): string {
			do {
				prefix += ~~(Math.random() * Util.MAX_UID)
			}
			while (document.getElementById(prefix))
			return prefix
		}

		static scrollIntoView(elm, view) {
			var e = $(elm);
			var p = $(view);

			var x = {
				top: e.offset().top,
				bottom: e.offset().top + e.outerHeight()
			};

			var v = {
				top: p.offset().top,
				bottom: p.offset().top + p.innerHeight()
			};
			if (x.bottom > v.bottom) p.scrollTop(p.scrollTop() + (x.bottom - v.bottom));
			if (x.top < v.top) p.scrollTop(p.scrollTop() - (v.top - x.top));
		}

		static escapeRegex(s: string): string {
			return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
		}

		static callAsync(func, context, ...any) {
			var args = [];
			if (!func) return;
			if (arguments.length > 2) {
				for (var i = 2; i < arguments.length; i++) {
					args.push(arguments[i]);
				}
			}
			setTimeout(function () {
				func.apply(context, args);
			});
		}

		static getScrollBarWidth() {
			var self;
			self = Util.getScrollBarWidth;
			if (self.width != null) return self.width;
			var div;
			div = document.createElement("div");
			div.innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-100px;top:-100px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>';
			div = div.firstChild;
			document.body.appendChild(div);
			//memorize the width in the function itself
			self.width = div.offsetWidth - div.clientWidth;
			document.body.removeChild(div);
			return self.width;
		}

		static getScrollLineHeight() {
			var self;
			self = Util.getScrollLineHeight;
			if (self.height != null) return self.height;
			var r;
			var iframe = document.createElement('iframe');
			iframe.src = '#';
			document.body.appendChild(iframe);
			var iwin = iframe.contentWindow;
			var idoc = iwin.document;
			idoc.open();
			idoc.write('<!DOCTYPE html><html><head></head><body><span>a</span></body></html>');
			idoc.close();
			var span = idoc.body.firstElementChild;
			r = $(span).innerHeight();
			document.body.removeChild(iframe);
			self.height = r;
			return self.height;
		}

		static clamp(value: number, min: number, max: number): number {
			if (value < min) value = min;
			if (value > max) value = max;
			return value;
		}

	}
}