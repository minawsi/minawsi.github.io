var posts=["2025/10/30/hello-world/","2025/10/30/updateDay1/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };