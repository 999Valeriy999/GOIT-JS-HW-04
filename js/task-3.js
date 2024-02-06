const profile = {
    username: "Jacob",
    playTime: 300,
    changeUsername: function (newName) {
      this.username = newName;
    },
}
  console.log(profile.getInfo()); 
  
  profile.changeUsername("Marco");
  console.log(profile.getInfo()); 
  
  profile.updatePlayTime(20);
  console.log(profile.getInfo()); 