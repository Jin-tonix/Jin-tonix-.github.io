<template>
  <section id="contact">
    <div class="contact-inner contact-left">
      <h2>CONTACT ✉</h2>
      <p>Thank you : )</p>
      <div class="img"></div> <!-- 이미지를 넣을 수 있는 공간 -->
    </div>
    <div class="contact-inner contact-right">
      <form action="mailto:savinpark0315@gmail.com" method="post" enctype="text/plain">
        <input type="text" name="name" placeholder="Name" autocomplete="off" />
        <input type="text" name="title" placeholder="Title" autocomplete="off" />
        <textarea name="message" placeholder="Message" cols="30" rows="12" autocomplete="off"></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection', // 컴포넌트 이름을 다중 단어로 변경
};
</script>

<style scoped>
#contact {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  background-color: #f4f4f9; /* 배경색 추가 */
}

.contact-inner {
  flex: 1;
  padding: 20px;
}

.contact-left {
  text-align: center;
}

.contact-left h2 {
  font-size: 2rem;
  color: #333;
}

.contact-left p {
  font-size: 1.2rem;
  margin-top: 10px;
}

.contact-right form {
  display: flex;
  flex-direction: column;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
}

button:hover {
  background-color: #45a049;
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  #contact {
    flex-direction: column;
    padding: 20px;
  }

  .contact-left, .contact-right {
    width: 100%;
    text-align: center;
  }
}
</style>
