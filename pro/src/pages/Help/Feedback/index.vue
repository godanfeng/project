<template>
  <div class="body">
    <h3>联系我们</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
      dis parturient montes, nascetur,Lorem ipsum dolor sit amet, consectetuer
      adipiscing elit. Aenean ligula eget dolor. Aenean massa. Cum sociis
      natoque penatibus et magnis dis parturient montes
    </p>
    <form>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Subject" />
      <textarea></textarea>
      <input type="submit" class="sub" value="SEND MESSAGE" />
    </form>
  </div>
</template>

<script>
export default {
  name: "Feedback",
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
.fl {
  float: left;
}
.cl {
  clear: both;
}

a {
  text-decoration: none;
}
.body{
    width: 1140px;
    margin: 0 auto;
}
.body h3{
    text-align: center;
    margin-top: 57px;
    line-height: 96px;
    font-size: 25px;
    color: #010101;
}
.body p{
    line-height: 23px;
    font-size: 12px;
    color: #aeaeae;
}
.body form{
    margin-top: 31px;
}
.body form input{
    width: 350px;
    padding-left: 17px;
    border: 1px solid #dcdbe0;
    background-color: #ededed;
    line-height: 47px;
    margin-right: 3px;
    border-radius: 4px;
    font-size: 12px;
    color: #acacac;
}
.body form textarea{
    border: 1px solid #dcdbe0;
    background-color: #ededed;
    width: 1098px;
    height: 231px;
    border-radius: 4px;
    padding-left: 17px;
    color: #acacac;
    padding-top: 17px;
    margin-top: 20px;
}

.body form .sub{
    width: 225px;
    height: 57px;
    background-image: url("./img/send_bg_03.jpg");
    border: none;
    color: #fefefc;
    font-weight: bold;
    font-size: 14px;
    padding: 0;
    cursor: pointer;
    transform: translateX(-50%);
    margin-left: 50%;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>