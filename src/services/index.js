export class SliderService {
  static handlers = [];

  static subscribe(handler) {
    if (!SliderService.handlers.includes(handler)) {
      SliderService.handlers.push(handler);
    }
  }

  static unsubscribe(handler) {
    if (SliderService.handlers.includes(handler)) {
      SliderService.handlers = SliderService.handlers.filter((element) => element !== handler);
    }
  }

  static nextSlide() {
    SliderService.handlers.forEach((handler) => {
      handler.next();
    });
  }

  static perviousSlide() {
    SliderService.handlers.forEach((handler) => {
      handler.prev();
    });
  }

  static moveTo(slideIndex) {
    SliderService.handlers.forEach((handler) => {
      handler.moveTo(slideIndex);
    });
  }
}
