# vanillanote.min
A simple editor using only Vanilla JS and ES5 syntax.<br><br>
Home page: https://vanilla-note.github.io

## Why Vanillanote?
* It uses only Vanilla JS and ES5 syntax, so it can be applied in a wide range of environments.
* It separates actions in desktop and mobile environments.
* Multiple notes can be drawn on a single document.
* Available in languages other than English.(ex. Korean)
* It is implemented to have minimal impact on existing css or javascript sources.
* Not using innerHTML and eval..
* Various controls are possible through html tag attribute values.
* Note control is possible through the provided function API.
* Vanillanote objects can be used through getNote().

## Anyone can use it very easily.
1. download min.js file
2. Include js

<pre>
&lt;script src="../Vanillanote.min.1.0.0.js"&gt;&lt;/script&gt;
</pre>

3. Lastly, the div tag is added!

<pre>
&lt;body&gt;
  &lt;div data-vanillanote&gt;&lt;/div&gt;
&lt;/body&gt;
</pre>

4. And the submit is done as follows.

<pre>
function() {
  const note01 = document.querySelectorAll('[data-vanillanote]')[0];
  console.log(note01.getNoteData());
}
</pre>

#### [Vanillanote offers a variety of attributes and API objects. Please refer to the homepage!](https://vanilla-note.github.io)

## Purpose of production
Vanillanote is developed by one person. It was developed for javascript learning purposes. Therefore, it cannot guarantee 100% reliability when used, and there are some limited features. However, I think it will show a certain excellent level of performance. Vanillanote was started to reduce the need to develop a new editor every time I proceed with a personal project. It aimed to develop an editor that can be used without a library or framework in any environment, including Jquery, Vue, React, etc. Therefore, only Vanilla JS and ES5 syntax were used. The advantages and disadvantages of Vanillanote are as follows.

## Contact
hani son.  
hison0319@gmail.com



ps.  
I used a translator for English and am now looking for someone who would be grateful to help with more accurate translation.
