!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},t={},i={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in i){var n=i[e];delete i[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){i[e]=n},o.parcelRequired7c6=r);var u=r("7Y9D8"),a=document.querySelector(".form"),l=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),f=document.querySelector('[name="amount"]');function c(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i&&o({position:e,delay:n}),t({position:e,delay:n})}),n)}))}a.addEventListener("submit",(function(e){e.preventDefault();var o=Number(l.value),t=Number(d.value),i=Number(f.value);(i<=0||o<0||t<0)&&n(u).Notify.failure(" Please input correct values (>=0)");for(var r=1;r<=i;r+=1)c(r,o).then((function(e){var o=e.position,t=e.delay;n(u).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(e){var o=e.position,t=e.delay;n(u).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=t;a.reset()}))}();
//# sourceMappingURL=03-promises.a1b2c066.js.map
