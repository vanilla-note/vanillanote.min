# vanillanote.min
A simple editor using only Vanilla JS and ES5 syntax.<br><br>
Home page: https://vanilla-note.github.io/#

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
&lt;script src="../Vanillanote.1.0.0.js"&gt;&lt;/script&gt;
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

#### Vanillanote offers a variety of attributes and API objects. Please refer to the homepage!
