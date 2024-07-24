# vanillanote.min
A simple editor using only Vanilla JS and ES5 syntax.<br><br>

### Download Vanillanote v1.0.0 release!
### Or Use npm & webpack
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
### 1-1. use npm & webpack
<pre>npm i vanillagrid</pre>

<pre>
//src/index.js
import { getVanillanote, vanillanote_onCreate, vanillanote_onDestroy } from 'vanillanote';

const vn = getVanillanote();
vanillanote_onCreate(vn);
//vanillanote_onDestroy(vn);
</pre>

### 1-2. Or Include min.js file and use src
#### ※ The dist/Vanillanote.min.1.0.0.js file of git vanillanote.min can be used as a header declaration.
#### ※ The dist/Vanillanote.bundle.js file in git vanillanote.min is used in the webpack method.
#### ※ The header declaration method through the Vanillanote.min file automatically manages the life cycle of the vanilla note, while the webpack method through the Vanillanote.bundle file requires the user to manage the life cycle.

<pre>
&lt;script src="../Vanillanote.min.1.0.0.js"&gt;&lt;/script&gt;
</pre>

### 2. Lastly, the div tag is added!

<pre>
&lt;body&gt;
  &lt;div data-vanillanote&gt;&lt;/div&gt;
&lt;/body&gt;
</pre>

### 3. And the submit is done as follows.

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
