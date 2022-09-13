class ProfileDetails extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="intro-y box p-4 mt-3">
            <div class="text-base font-medium">Personal Information</div>
            <div class="mt-4">
                <div class="border-gray-200 dark:border-dark-5 flex items-center border-b pb-3">
                    <div class="">
                        <div class="text-gray-600">Country</div>
                        <div class="mt-0.5">New York City, USA</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe w-4 h-4 text-gray-600 ml-auto"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg> 
                </div>
                <div class="border-gray-200 dark:border-dark-5 flex items-center border-b py-3">
                    <div class="">
                        <div class="text-gray-600">Phone</div>
                        <div class="mt-0.5">+32 19 23 62 24 34</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mic w-4 h-4 text-gray-600 ml-auto"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg> 
                </div>
                <div class="border-gray-200 dark:border-dark-5 flex items-center py-3">
                    <div class="">
                        <div class="text-gray-600">Email</div>
                        <div class="mt-0.5">johntravolta@left4code.com</div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail w-4 h-4 text-gray-600 ml-auto"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> 
                </div>
            </div>
        </div>
        `;
      }
}
  
customElements.define('profile-details', ProfileDetails);