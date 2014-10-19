require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"views":[function(require,module,exports){
module.exports = function(views) {
  var derbyTemplates = require('derby-templates');
  var expressions = derbyTemplates.expressions;
  var templates = derbyTemplates.templates;

  views.register('body', '\n  <tabs selectedIndex="{{2}}">\n    <pane title="One"><b>Hi</b></pane>\n    <pane title="Two">ho</pane>\n    <pane title="Three">away</pane>\n    <pane title="Four">we {{_page.punchline}}</pane>\n  </tabs>\n\n\n').template = new templates.Template([new templates.ViewInstance('tabs', {'selectedIndex': 2, 'pane': [{'title': 'One', 'content': new templates.ParentWrapper(new templates.Template([new templates.Element('b', void 0, [new templates.Text('Hi')], void 0, false)]))}, {'title': 'Two', 'content': new templates.ParentWrapper(new templates.Template([new templates.Text('ho')]))}, {'title': 'Three', 'content': new templates.ParentWrapper(new templates.Template([new templates.Text('away')]))}, {'title': 'Four', 'content': new templates.ParentWrapper(new templates.Template([new templates.Text('we '), new templates.DynamicText(new expressions.PathExpression(['_page', 'punchline'], new expressions.ExpressionMeta('_page.punchline')))]))}]})]);
  views.register('tabs', '\n  <ul class="tabs">\n    {{each @pane as #pane, #i}}\n    <li class="{{if #i === selectedIndex}}active{{/}}" on-click="select(#i)">\n      {{#pane.title}}\n    </li>\n    {{/each}}\n  </ul>\n  {{each @pane as #pane, #i}}\n  <div class="tabs-pane {{if #i === selectedIndex}}active{{/}}">{{#pane.content}}</div>\n  {{/each}}\n\n', {'element': 'tabs', 'arrays': 'pane'}).template = new templates.Template([new templates.Element('ul', {'class': new templates.Attribute('tabs')}, [new templates.EachBlock(new expressions.AttributePathExpression('pane', [], new expressions.ExpressionMeta('each @pane as #pane, #i', 'each', void 0, '#pane', '#i')), [new templates.Element('li', {'class': new templates.DynamicAttribute(new templates.ConditionalBlock([new expressions.OperatorExpression('===', [new expressions.AliasPathExpression('#i', []), new expressions.PathExpression(['selectedIndex'])], void 0, new expressions.ExpressionMeta('if #i === selectedIndex', 'if'))], [[new templates.Text('active')]]))}, [new templates.DynamicText(new expressions.AliasPathExpression('#pane', ['title'], new expressions.ExpressionMeta('#pane.title')))], [new templates.ElementOn('click', new expressions.FnExpression(['select'], [new expressions.AliasPathExpression('#i', [])]))], false)])], void 0, false), new templates.EachBlock(new expressions.AttributePathExpression('pane', [], new expressions.ExpressionMeta('each @pane as #pane, #i', 'each', void 0, '#pane', '#i')), [new templates.Element('div', {'class': new templates.DynamicAttribute(new templates.Template([new templates.Text('tabs-pane '), new templates.ConditionalBlock([new expressions.OperatorExpression('===', [new expressions.AliasPathExpression('#i', []), new expressions.PathExpression(['selectedIndex'])], void 0, new expressions.ExpressionMeta('if #i === selectedIndex', 'if'))], [[new templates.Text('active')]])]))}, [new templates.DynamicText(new expressions.AliasPathExpression('#pane', ['content'], new expressions.ExpressionMeta('#pane.content')))], void 0, false)])]);
  views.register('index', '\n  <h1>Hello world</h1>\n\n').template = new templates.Template([new templates.Element('h1', void 0, [new templates.Text('Hello world')], void 0, false)]);
}

},{"derby-templates":"derby-templates"}]},{},[]);