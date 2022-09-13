class InviteFriendsModal extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="modal-invite-friends modal" id="invite-friends-modal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <div class="intro-y text-lg font-medium">Invite Friends</div>
                    <div class="modal-content__scrollable overflow-y-auto scrollbar-hidden -mx-4 px-4 mt-4">
                        <div class="user-list">
                            <div class="intro-y pb-3">
                                <div class="intro-y text-gray-500 mb-3">A</div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-1.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Keanu Reeves</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-a-0">
                                    </div>
                                </div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-10.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Leonardo DiCaprio</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 10 minutes ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-a-1">
                                    </div>
                                </div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-14.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Christian Bale</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 15 seconds ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-a-2">
                                    </div>
                                </div>
                                <div class="intro-y text-gray-500 mt-6 mb-3">B</div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-1.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Keanu Reeves</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-b-0">
                                    </div>
                                </div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-10.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Leonardo DiCaprio</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 10 minutes ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-b-1">
                                    </div>
                                </div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-14.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Christian Bale</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 15 seconds ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-b-2">
                                    </div>
                                </div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-4.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Kevin Spacey</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 52 seconds ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-b-3">
                                    </div>
                                </div>
                                <div class="intro-y text-gray-500 mt-6 mb-3">C</div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in ">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-1.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Keanu Reeves</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 14 seconds ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-ac-0">
                                    </div>
                                </div>
                                <div class="intro-y block">
                                    <div class="box dark:bg-dark-3 cursor-pointer relative flex items-center px-4 py-3 zoom-in mt-4">
                                        <div class="w-10 h-10 flex-none image-fit mr-1">
                                            <img alt="Topson Messenger Tailwind HTML Admin Template" class="rounded-full" src="../../assets/images/profile-10.jpg">
                                            <div class="bg-green-500 border-white w-3 h-3 absolute right-0 bottom-0 rounded-full border-2"></div>
                                        </div>
                                        <div class="ml-2 overflow-hidden">
                                            <a href="javascript:;" class="font-medium">Leonardo DiCaprio</a>
                                            <div class="flex items-center text-xs">
                                                <div class="text-gray-600 whitespace-nowrap text-xs mt-0.5">Last seen 10 minutes ago ago</div>
                                            </div>
                                        </div>
                                        <input class="form-check-switch ml-auto" type="checkbox" id="friend-list-ac-1">
                                    </div>
                                </div>
                            </div>
                            <div class="user-list__action bg-white dark:bg-dark-6 -mx-4 px-4">
                                <button class="btn btn-primary w-full">Send Invitation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `;
      }
}
  
customElements.define('invite-friends-modal', InviteFriendsModal);