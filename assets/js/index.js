
    let userData = [
        {
            id: 1, 
            avatar: '/assets/images/profile-1.jpg',
            name: 'Maria Sharapova', 
            phone: '12560',
            email:'sharapova@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 2, 
            avatar: '/assets/images/profile-2.jpg',
            name: 'Keanu Reeves', 
            phone: '12560',
            email:'reeves@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 3, 
            avatar: '/assets/images/profile-3.jpg',
            name: 'Alexia Putellas', 
            phone: '12560',
            email:'alexia@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 4, 
            avatar: '/assets/images/profile-4.jpg',
            name: 'Anna Rose', 
            phone: '12560',
            email:'anna@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 5, 
            avatar: '/assets/images/profile-5.jpg',
            name: 'Johan Elmander', 
            phone: '12560',
            email:'elmander@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 6, 
            avatar: '/assets/images/profile-6.jpg',
            name: 'Daniel Rodgers', 
            phone: '12560',
            email:'daniel@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 7, 
            avatar: '/assets/images/profile-6.jpg',
            name: 'Diana Liu', 
            phone: '12560',
            email:'diana@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 8, 
            avatar: '/assets/images/profile-6.jpg',
            name: 'Athena Nguyen', 
            phone: '12560',
            email:'athena@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 9, 
            avatar: '/assets/images/profile-6.jpg',
            name: 'Robert Maxwell', 
            phone: '12560',
            email:'robert@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        },
        {
            id: 10, 
            avatar: '/assets/images/profile-6.jpg',
            name: 'Kayleigh truong', 
            phone: '12560',
            email:'kayleigh@gmail.com',
            bio: '',
            location: 'Hanoi, Vietnam',
            gender: 'Male',
            job: 'Software engineer',
            password: 'muoiconso1',
            twitter_account: '@random',
            facebook_account: '@random',
            instagram_account: '@random',
            github_account: '@random'
        }
    ]

    let user1 = userData.find(item => item.id === 1);
    let user2 = userData.find(item => item.id === 2);
    let user3 = userData.find(item => item.id === 3);
    let user4 = userData.find(item => item.id === 4);
    let user5 = userData.find(item => item.id === 5);
    let user6 = userData.find(item => item.id === 6);
    let user7 = userData.find(item => item.id === 7);
    let user8 = userData.find(item => item.id === 8);
    let user9 = userData.find(item => item.id === 9);
    let user10 = userData.find(item => item.id === 10);

    document.getElementById("user_name_1").innerHTML = user1.name;
    document.getElementById("user_name_2").innerHTML = user2.name;
    document.getElementById("user_name_3").innerHTML = user3.name;
    document.getElementById("user_name_4").innerHTML = user4.name;
    document.getElementById("user_name_5").innerHTML = user5.name;
    document.getElementById("user_name_6").innerHTML = user6.name;
    document.getElementById("user_name_7").innerHTML = user7.name;
    document.getElementById("user_name_8").innerHTML = user8.name;
    document.getElementById("user_name_9").innerHTML = user9.name;
    document.getElementById("user_name_10").innerHTML = user10.name;

    document.getElementById("user_email_1").innerHTML = user1.email;
    document.getElementById("user_email_2").innerHTML = user2.email;
    document.getElementById("user_email_3").innerHTML = user3.email;
    document.getElementById("user_email_4").innerHTML = user4.email;
    document.getElementById("user_email_5").innerHTML = user5.email;
    document.getElementById("user_email_6").innerHTML = user6.email;

function content(x) {
    if (x === 0) {
        document.getElementById("group-members").style.display = "block";
        document.getElementById("group-details").style.display = "none";
        document.getElementById("search-box").style.display = "flex";
        
    } else {
        document.getElementById("group-details").style.display = "block";
        document.getElementById("group-members").style.display = "none";  
        document.getElementById("group-details").classList.add('active');
        document.getElementById("search-box").style.display = "none";
    }
}

function dropdown() {
    document.getElementById("dropdown-content").classList.toggle("show");
  }
  
  var modal = document.getElementById("groupModal");
  var nextBtn = document.getElementById("nextBtn");
  var span = document.getElementsByClassName("close")[0];

  nextBtn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }
  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

