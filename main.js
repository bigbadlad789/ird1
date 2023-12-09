const button=document.querySelector('.rnd')
const div=document.querySelector('.middle')

function changecontent(){
    div.innerHTML='<h1>Research at UG and PG Level</h1>'
    div.innerHTML+='<p>Teaching and research are equally important in a university. On the establishment of the university, it was thought to promote creativity among the undergraduate and postgraduate students, some research component in the curricula, especially in the final or pre-final year of the bachelor programme and final year in the masters programme, is necessary. Accordingly in the 5th semester onwards of the bachelors programme, the UG Research Project and Mini Project are inducted where the students under the guidance of the faculty, work on the decided topic of the dissertation and seek publications in the listed journals reviewed periodically. The final project is submitted to the institution and the viva is conducted. Similarly, in the postgraduate programme, research was emphasised emphatically and students. were trained for robust research skills. PG students also undertake minor and major projects as part of their course. Partial travel grant is provided to UG and PG students to attend national and international conferences</p>'
    
}
button.addEventListener('click',changecontent)


const button1=document.querySelector('.phd')
const div1=document.querySelector('.middle')

function changecontent1(){
    div1.innerHTML='<h1>Ph.D. Programme</h1>'
    div1.innerHTML+='<p>The university encourages the PhD programme in the thrust areas of the departments. The university has fellowship schemes for qualified students as per the PhD ordinance. The university supports PhD students with contingency, travel grants to attend national and international! conferences</p>'
    
}
button1.addEventListener('click',changecontent1)

const button2=document.querySelector('.crp')
const div2=document.querySelector('.middle')

function changecontent2(){
    div2.innerHTML='<h1>Collaborative Research Projects</h1>'
    div2.innerHTML+='<p>The university-industry interaction is envisaged to contribute to the society at large, the departments of the University closely work with industries and different organisations. Industries and business organisations face different problems and would like to have help from the university with the aim of finding solutions to these problems. For that, the university has the following activities: </p>'
    div2.innerHTML+='<p>1. Sponsored Research Project: An organisation can sponsor a project and the experts of the the institution concerned can conduct research on this project for which the financial support will come from the organisation. As a result, if any intellectual property (IP) is generated that will be registered as per the IPR Policy of DTU, the income coming out of the commercialization of IP shall be shared as per the IPR policy of DTU.</p>'
    div2.innerHTML+='<p>2. Interdisciplinary Research: The interdisciplinary research in the department, institution, researcher or scholar may address a research problem in which more than one discipline is involved and unless they get together and conduct interdisciplinary research no fruitful findings can be arrived at. Therefore, the University has decided to support interdisciplinary research activities for which the following steps will be taken:</p>'
    div2.innerHTML+='<p>(i) Identify the interdisciplinary area.</p>'
    div2.innerHTML+='<p>(ii) Identify the different experts from concerned disciplines who can work together.</p>'
    div2.innerHTML+='<p>(ii)Study the requirement of the infrastructure to conduct the concerned interdisciplinary research.</p>'
    

}
button2.addEventListener('click',changecontent2)
