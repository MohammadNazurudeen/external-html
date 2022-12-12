$(document).ready(function(){
  	$('#displayPage').load('https://mohammadnazurudeen.github.io/external-html/webflow-test.html');
    image1();
    $('.html2PdfConverter').click(function() {
      console.log("Here");

      // get the contents of the link that was clicked
      var m_s_h_1 = $(".m-s-h-1").text();
      var m_s_p_1 = $(".m-s-p-1").text();
      var m_s_p_2 = $(".m-s-p-2").text();
      var m_s_p_3 = $(".m-s-p-3").text();
      var m_s_p_4 = $(".m-s-p-4").text();

      var i_s_h_1 = $(".i-s-h-1").text();
      var i_s_p_1 = $(".i-s-p-1").text();
      var i_s_p_2 = $(".i-s-p-2").text();
      var i_s_p_3 = $(".i-s-p-3").text();
      var i_s_p_4 = $(".i-s-p-4").text();
      // var i_s_m_1 = $(".i-s-m-1").text();
      var i_s_m_1 = $("img#my-image-1").attr("src");
      //console.log(i_s_m_1);
      //return false;
      

      var s_f_s_h_1 = $(".s-f-s-h-1").text();
      var s_f_s_p_1 = $(".s-f-s-p-1").text();
      var s_f_s_p_2 = $(".s-f-s-p-2").text();
      var s_f_s_p_3 = $(".s-f-s-p-3").text();
      var s_s_s_c_l_p_1 = $(".s-s-s-c-l-p-1").text();
      var i_s_m_2 = $("img#my-image-2").attr("src");

      var s_t_s_p_1 = $(".s-t-s-p-1").text();
      var s_t_s_p_2 = $(".s-t-s-p-2").text();
      var s_t_s_p_3 = $(".s-t-s-p-3").text();

      $(".m-s-h-1").html(m_s_h_1);
      $(".m-s-p-1").html(m_s_p_1);
      $(".m-s-p-2").html(m_s_p_2);
      $(".m-s-p-3").html(m_s_p_3);
      $(".m-s-p-4").html(m_s_p_4);

      $(".i-s-h-1").html(i_s_h_1);
      $(".i-s-p-1").html(i_s_p_1);
      $(".i-s-p-2").html(i_s_p_2);
      $(".i-s-p-3").html(i_s_p_3);
      $("img#i-s-m-1").attr("src", i_s_m_1);
      $(".i-s-p-4").html(i_s_p_4);
      
      // $(".i-s-m-1").html(i_s_m_1);
      //console.log($("img#my-image-1").attr("src", "i_s_m_1"));
      //return false;

      $(".s-f-s-h-1").html(s_f_s_h_1);
      $(".s-f-s-p-1").html(s_f_s_p_1);
      $(".s-f-s-p-2").html(s_f_s_p_2);
      $(".s-f-s-p-3").html(s_f_s_p_3);
      $(".s-s-s-c-l-p-1").html(s_s_s_c_l_p_1);
      $("img#i-s-m-2").attr("src", i_s_m_2);
      $(".s-t-s-p-1").html(s_t_s_p_1);
      $(".s-t-s-p-2").html(s_t_s_p_2);
      $(".s-t-s-p-3").html(s_t_s_p_3);

      //$(".wf-section").hide();
      //window.location.href = "https://info.tringapps.com/article-thank-you";
      createPDF();
    });
    
  });

  function image1(){
    const image = document.getElementById('my-image-1');
      fetch(image.src)
          .then((res) => res.blob())
          .then((blob) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                  document.getElementById("my-image-1").src = reader.result;
              }
              reader.readAsDataURL(blob);
          });

    const image2 = document.getElementById('my-image-2');
      fetch(image2.src)
          .then((res) => res.blob())
          .then((blob) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                  document.getElementById("my-image-2").src = reader.result;
              }
              reader.readAsDataURL(blob);
          });
  }
  
  function createPDF() {
    var element = document.getElementById('element-to-print');
    html2pdf(element, {
        margin:0.5,
        padding:0,
        filename: 'myfile.pdf',
        image: { type: 'jpeg', quality: 0.5},
        html2canvas: { scale: 2,  logging: true },
        jsPDF: { unit: 'in', format: 'A2', orientation: 'P' },
        class: createPDF
    });
  }