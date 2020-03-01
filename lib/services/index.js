"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderService = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SliderService = /*#__PURE__*/function () {
  function SliderService() {
    _classCallCheck(this, SliderService);
  }

  _createClass(SliderService, null, [{
    key: "subscribe",
    value: function subscribe(handler) {
      if (!SliderService.handlers.includes(handler)) {
        SliderService.handlers.push(handler);
      }
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(handler) {
      if (SliderService.handlers.includes(handler)) {
        SliderService.handlers = SliderService.handlers.filter(function (element) {
          return element !== handler;
        });
      }
    }
  }, {
    key: "nextSlide",
    value: function nextSlide() {
      SliderService.handlers.forEach(function (handler) {
        handler.next();
      });
    }
  }, {
    key: "perviousSlide",
    value: function perviousSlide() {
      SliderService.handlers.forEach(function (handler) {
        handler.prev();
      });
    }
  }, {
    key: "moveTo",
    value: function moveTo(slideIndex) {
      SliderService.handlers.forEach(function (handler) {
        handler.moveTo(slideIndex);
      });
    }
  }]);

  return SliderService;
}();

exports.SliderService = SliderService;
SliderService.handlers = [];