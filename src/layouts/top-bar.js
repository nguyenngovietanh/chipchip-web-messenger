class Topbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="top-bar top-0 left-0 fixed w-full h-16">
            <div class="-intro-y top-bar__content bg-white border-theme-3 dark:bg-dark-2 dark:border-dark-2 border-b w-full h-full flex px-5">
                <!-- BEGIN: Logo -->
                <a class="hidden md:flex items-center h-full mr-auto" href="http://localhost/page/dashboard">
                    <img alt="Topson Messenger Tailwind HTML Admin Template" class="h-8" src="../../assets/images/logo.svg">
                    <div class="text-base font-light ml-4"> <span class="font-medium">Topson</span> Messenger </div>
                </a>
                <!-- END: Logo -->
                <a class="mobile-menu-toggler flex md:hidden items-center h-full mr-auto px-5 -ml-5" href="javascript:;"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bar-chart-2 w-5 h-5 transform rotate-90"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg> </a>
                <div class="h-full flex items-center">
                    <div class="mr-3">Dark Mode</div>
                    <input class="form-check-switch" type="checkbox" id="dark-mode-switcher">
                </div>
                <div class="hidden md:flex items-center px-5"> <a href="javascript:;" data-toggle="modal" data-target="#invite-friends-modal" class="btn btn-primary">Invite Friends</a> </div>
                <!-- BEGIN: Notifications -->
                <div class="notification-dropdown dropdown">
                    <a href="javascript:;" class="notification-dropdown__toggler text-gray-600 border-theme-7 dark:border-dark-4 dark:text-gray-300 dropdown-toggle h-full flex items-center px-5 relative -mr-3 md:mr-0 md:border-l md:border-r">
                        <div class="relative">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell w-5 h-5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg> 
                            <div class="w-2 h-2 bg-theme-1 text-white flex items-center justify-center absolute -mt-0.5 top-0 right-0 rounded-full"></div>
                        </div>
                    </a>
                    <div class="notification-dropdown__content dropdown-menu">
                        <div class="dropdown-menu__content box dark:bg-dark-2 px-4 pt-4 pb-5">
                            <div class="text-base font-medium leading-tight mb-4">Notifications</div>
                            <div class="cursor-pointer relative flex items-center ">
                                <div class="w-10 h-10 flex-none image-fit mr-1">
                                    <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-1.jpg">
                                    <div class="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Keanu Reeves</a> 
                                        <div class="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                                    </div>
                                    <div class="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-6">
                                <div class="w-10 h-10 flex-none image-fit mr-1">
                                    <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-10.jpg">
                                    <div class="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Leonardo DiCaprio</a> 
                                        <div class="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">01:10 PM</div>
                                    </div>
                                    <div class="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-6">
                                <div class="w-10 h-10 flex-none image-fit mr-1">
                                    <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-14.jpg">
                                    <div class="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Christian Bale</a> 
                                        <div class="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                                    </div>
                                    <div class="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-6">
                                <div class="w-10 h-10 flex-none image-fit mr-1">
                                    <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-4.jpg">
                                    <div class="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Kevin Spacey</a> 
                                        <div class="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">06:05 AM</div>
                                    </div>
                                    <div class="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                            <div class="cursor-pointer relative flex items-center mt-6">
                                <div class="w-10 h-10 flex-none image-fit mr-1">
                                    <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-13.jpg">
                                    <div class="w-3 h-3 absolute right-0 bottom-0 bg-theme-1 border-white rounded-full border-2"></div>
                                </div>
                                <div class="ml-2 overflow-hidden">
                                    <div class="flex items-center">
                                        <a href="javascript:;" class="font-medium truncate mr-5">Tom Hanks</a> 
                                        <div class="text-opacity-50 text-gray-800 text-xs ml-auto whitespace-nowrap -mt-0.5">05:09 AM</div>
                                    </div>
                                    <div class="text-opacity-70 text-gray-800 dark:text-gray-500 w-full truncate mt-0.5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: Notifications -->
                <!-- BEGIN: Account -->
                <div class="account-dropdown dropdown relative">
                    <a href="javascript:;" class="h-full dropdown-toggle flex items-center pl-5">
                        <div class="w-8 h-8 image-fit">
                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full shadow-md" src="../../assets/images/profile-2.jpg">
                        </div>
                        <div class="hidden md:block ml-3">
                            <div class="w-28 truncate font-medium leading-tight">Keanu Reeves</div>
                            <div class="account-dropdown__info text-xs text-gray-600">Frontend Engineer</div>
                        </div>
                    </a>
                    <div class="dropdown-content dropdown-menu absolute w-56 top-0 right-0 z-20">
                        <div class="dropdown-menu__content box dark:bg-dark-2">
                            <div class="p-2">
                                <a href="https://topson.left4code.com/" class="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user w-4 h-4 mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile </a>
                                <a href="https://topson.left4code.com/" class="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit w-4 h-4 mr-2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg> Add Account </a>
                                <a href="https://topson.left4code.com/" class="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-lock w-4 h-4 mr-2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Reset Password </a>
                                <a href="https://topson.left4code.com/" class="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-help-circle w-4 h-4 mr-2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg> Help </a>
                            </div>
                            <div class="border-gray-200 dark:border-dark-4 p-2 border-t">
                                <a href="https://topson.left4code.com/" class="flex items-center block p-2 transition duration-300 ease-in-out rounded-md hover:bg-gray-200 dark:hover:bg-dark-3"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-toggle-right w-4 h-4 mr-2"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle></svg> Logout </a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- END: Account -->
            </div>
        </div>
        `;
      }
}
  
customElements.define('top-bar', Topbar);