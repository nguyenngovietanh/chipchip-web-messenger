class ProfileSide extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="intro-y box relative px-4 py-6">
            <a href="javascript:;" class="text-gray-600 tooltip w-8 h-8 block flex items-center justify-center absolute top-0 right-0 mr-1 mt-1"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-2 w-4 h-4"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg> </a>
            <div class="w-20 h-20 mx-auto image-fit">
                <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-9.jpg">
                <div class="bg-green-500 border-white w-3 h-3 absolute right-0 top-0 mt-1 mr-1 rounded-full border-2"></div>
            </div>
            <div class="text-base font-medium text-center mt-3">John Travolta</div>
            <div class="text-gray-600 text-center text-xs uppercase mt-0.5">Software Engineer</div>
        </div>
        `;
      }
}
  
customElements.define('profile-side', ProfileSide);