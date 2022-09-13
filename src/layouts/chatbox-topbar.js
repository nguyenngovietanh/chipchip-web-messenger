class ChatboxTopbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="intro-y box border border-theme-3 dark:bg-dark-2 dark:border-dark-2 flex items-center px-5 py-4">
                <div class="flex items-center mr-auto">
                    <div class="w-12 h-12 flex-none image-fit mr-1">
                        <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-9.jpg">
                        <div class="bg-green-500 w-3 h-3 absolute right-0 top-0 rounded-full border-2 border-white"></div>
                    </div>
                    <div class="ml-2 overflow-hidden">
                        <a href="javascript:;" class="text-base font-medium">John Travolta</a> 
                        <div class="text-gray-600">Online</div>
                    </div>
                </div>
                <a class="text-gray-600 hover:text-theme-1" href="https://topson.left4code.com/"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-camera w-4 h-4 sm:w-6 sm:h-6"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg> </a>
                <a class="text-gray-600 hover:text-theme-1 ml-2 sm:ml-5" href="https://topson.left4code.com/"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic w-4 h-4 sm:w-6 sm:h-6"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> </a>
            </div>
        `;
      }
}
  
customElements.define('chatbox-topbar', ChatboxTopbar);