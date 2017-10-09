class MessageView extends View {

    constructor(element) {
       super(element);
    }

   template(model) {

       return model.messageText ? `<p class="notification">${model.messageText}</p>` : '';
   }
}
