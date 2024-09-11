"use strict";(self.webpackChunkhezhijian249=self.webpackChunkhezhijian249||[]).push([[1904],{98152:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(26285),r={}},47069:function(o,e,n){n.r(e),n.d(e,{demos:function(){return h}});var t=n(15009),a=n.n(t),r=n(99289),s=n.n(r),l=n(67294),i=n(7902),h={"docs-algorithm-question-dynamic-programming-demo-0":{component:l.memo(l.lazy(s()(a()().mark(function u(){return a()().wrap(function(_){for(;;)switch(_.prev=_.next){case 0:return _.abrupt("return",{default:function(){var g=function(m){var I=m.length,f=new Array(I*2-1).fill(0).map(function(){return new Array(I).fill(0).map(function(){return new Array(I).fill(-Number.MAX_VALUE)})});f[0][0][0]=m[0][0];for(var d=1;d<I*2-1;d++)for(var j=Math.max(d-I+1,0);j<=Math.min(d,I-1);++j){var b=d-j;m[j][b]}console.log(f)},x=[[0,1,-1],[1,0,-1],[1,1,1]],c=g(x);return l.createElement("div",null,"\u8F93\u51FA\uFF1A",c||"")}});case 1:case"end":return _.stop()}},u)})))),asset:{type:"BLOCK",id:"docs-algorithm-question-dynamic-programming-demo-0",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:`export default () => {
  const cherryPickup = (grid: number[][]): number => {
    const n = grid.length;
    const f = new Array(n * 2 - 1)
      .fill(0)
      .map(() =>
        new Array(n).fill(0).map(() => new Array(n).fill(-Number.MAX_VALUE)),
      );
    f[0][0][0] = grid[0][0];
    // k\u662F\u8D70\u8FC7\u7684\u6B65\u6570, \u4ECE(0, 0) \u8D70\u5230(n-1, n-1)\u9700\u8981\u8D70 2n - 1\u6B65
    for (let k = 1; k < n * 2 - 1; k++) {
      for (let x1 = Math.max(k - n + 1, 0); x1 <= Math.min(k, n - 1); ++x1) {
        const y1 = k - x1;
        if (grid[x1][y1] === -1) {
          continue;
        }
      }
    }
    console.log(f);
  };
  const input = [
    [0, 1, -1],
    [1, 0, -1],
    [1, 1, 1],
  ];
  const result = cherryPickup(input);
  return <div>\u8F93\u51FA\uFF1A{result || ''}</div>;
};`}},entry:"index.tsx"},context:{},renderOpts:{compile:function(){var u=s()(a()().mark(function _(){var v,g=arguments;return a()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,n.e(4019).then(n.bind(n,4019));case 2:return c.abrupt("return",(v=c.sent).default.apply(v,g));case 3:case"end":return c.stop()}},_)}));function p(){return u.apply(this,arguments)}return p}()}}}},28209:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(17531),r={}},20981:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(14835),r={}},72239:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(23105),r={}},65575:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(22314),r={}},19421:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(15347),r={}},22522:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(50197),r={}},86456:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(1931),r={}},31835:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(86797),r={}},11171:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(68537),r={}},8737:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(53516),r={}},43505:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(48230),r={}},72213:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(9285),r={}},69959:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(79209),r={}},31163:function(o,e,n){var t;n.r(e),n.d(e,{demos:function(){return g}});var a=n(15009),r=n.n(a),s=n(99289),l=n.n(s),i=n(67294),h=n(94420),u=n(16941),p=n.n(u),_=n(78136),v=n(61169),g={"docs-react-sortablejs-shared-lists-demo-sharedlists":{component:i.memo(i.lazy(function(){return n.e(2433).then(n.bind(n,66411))})),asset:{type:"BLOCK",id:"docs-react-sortablejs-shared-lists-demo-sharedlists",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(52530).Z},react:{type:"NPM",value:"18.3.1"},"react-sortablejs":{type:"NPM",value:"6.1.4"},"./style.ts":{type:"FILE",value:n(53591).Z},"antd-style":{type:"NPM",value:"3.6.2"}},entry:"index.tsx"},context:{react:t||(t=n.t(i,2)),"react-sortablejs":u,"/home/runner/work/hezhijian249.github.io/hezhijian249.github.io/docs/react-sortablejs/demos/SharedLists/style.ts":_,"antd-style":v},renderOpts:{compile:function(){var x=l()(r()().mark(function E(){var m,I=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(4019).then(n.bind(n,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,I));case 3:case"end":return d.stop()}},E)}));function c(){return x.apply(this,arguments)}return c}()}}}},37640:function(o,e,n){var t;n.r(e),n.d(e,{demos:function(){return g}});var a=n(15009),r=n.n(a),s=n(99289),l=n.n(s),i=n(67294),h=n(67412),u=n(16941),p=n.n(u),_=n(45867),v=n(61169),g={"docs-react-sortablejs-sortable-clone-demo-sortableclone":{component:i.memo(i.lazy(function(){return n.e(2433).then(n.bind(n,63449))})),asset:{type:"BLOCK",id:"docs-react-sortablejs-sortable-clone-demo-sortableclone",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(47522).Z},react:{type:"NPM",value:"18.3.1"},"react-sortablejs":{type:"NPM",value:"6.1.4"},"./style.ts":{type:"FILE",value:n(27298).Z},"antd-style":{type:"NPM",value:"3.6.2"}},entry:"index.tsx"},context:{react:t||(t=n.t(i,2)),"react-sortablejs":u,"/home/runner/work/hezhijian249.github.io/hezhijian249.github.io/docs/react-sortablejs/demos/SortableClone/style.ts":_,"antd-style":v},renderOpts:{compile:function(){var x=l()(r()().mark(function E(){var m,I=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(4019).then(n.bind(n,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,I));case 3:case"end":return d.stop()}},E)}));function c(){return x.apply(this,arguments)}return c}()}}}},86903:function(o,e,n){var t;n.r(e),n.d(e,{demos:function(){return g}});var a=n(15009),r=n.n(a),s=n(99289),l=n.n(s),i=n(67294),h=n(5849),u=n(16941),p=n.n(u),_=n(40243),v=n(61169),g={"docs-react-sortablejs-sortable-simple-demo-simplelist":{component:i.memo(i.lazy(function(){return n.e(2433).then(n.bind(n,44326))})),asset:{type:"BLOCK",id:"docs-react-sortablejs-sortable-simple-demo-simplelist",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:n(47356).Z},react:{type:"NPM",value:"18.3.1"},"react-sortablejs":{type:"NPM",value:"6.1.4"},"./style.ts":{type:"FILE",value:n(1457).Z},"antd-style":{type:"NPM",value:"3.6.2"}},entry:"index.tsx"},context:{react:t||(t=n.t(i,2)),"react-sortablejs":u,"/home/runner/work/hezhijian249.github.io/hezhijian249.github.io/docs/react-sortablejs/demos/SimpleList/style.ts":_,"antd-style":v},renderOpts:{compile:function(){var x=l()(r()().mark(function E(){var m,I=arguments;return r()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,n.e(4019).then(n.bind(n,4019));case 2:return d.abrupt("return",(m=d.sent).default.apply(m,I));case 3:case"end":return d.stop()}},E)}));function c(){return x.apply(this,arguments)}return c}()}}}},16862:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(57980),r={}},26455:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(28815),r={}},50237:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(31843),r={}},32737:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(28349),r={}},39931:function(o,e,n){n.r(e),n.d(e,{demos:function(){return r}});var t=n(67294),a=n(42806),r={}},78136:function(o,e,n){n.r(e),n.d(e,{useStyles:function(){return u}});var t=n(68400),a=n.n(t),r=n(44242),s,l,i,h,u=(0,r.kc)(function(p){var _=p.css;return{flex:_(s||(s=a()([`
      display: flex;
      justify-content: space-between;
    `]))),halfway:_(l||(l=a()([`
      width: 49.5%;
    `]))),item:_(i||(i=a()([`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    `]))),tinted:_(h||(h=a()([`
      background-color: #fff6b2;
    `])))}})},40243:function(o,e,n){n.r(e),n.d(e,{useStyles:function(){return i}});var t=n(68400),a=n.n(t),r=n(44242),s,l,i=(0,r.kc)(function(h){var u=h.css;return{"draggable-item":u(s||(s=a()([`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    `]))),ghost:u(l||(l=a()([`
      background-color: #c8ebfb;
    `])))}})},45867:function(o,e,n){n.r(e),n.d(e,{useStyles:function(){return h}});var t=n(68400),a=n.n(t),r=n(44242),s,l,i,h=(0,r.kc)(function(u){var p=u.css;return{flex:p(s||(s=a()([`
      display: flex;
      justify-content: space-between;
    `]))),halfway:p(l||(l=a()([`
      width: 49.5%;
    `]))),item:p(i||(i=a()([`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    `])))}})},42897:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(26285);const a=[{value:"\u4E8C\u5206\u67E5\u627E\u662F\u4E00\u79CD\u5728\u6709\u5E8F\u6570\u7EC4\u4E2D\u67E5\u627E\u7279\u5B9A\u5143\u7D20\u7684\u7B97\u6CD5\u3002\u5B83\u901A\u8FC7\u6BD4\u8F83\u6570\u7EC4\u4E2D\u95F4\u5143\u7D20\u4E0E\u67E5\u627E\u5143\u7D20\u7684\u5927\u5C0F\uFF0C\u5C06\u641C\u7D22\u8303\u56F4\u7F29\u5C0F\u4E3A\u4E00\u534A\uFF0C\u76F4\u5230\u627E\u5230\u6216\u786E\u5B9A\u5143\u7D20\u4E0D\u5B58\u5728\u3002",paraId:0,tocIndex:0},{value:"\u9996\u5148\uFF0C\u786E\u5B9A\u6570\u7EC4\u7684\u4E2D\u95F4\u5143\u7D20\u7684\u7D22\u5F15\u3002",paraId:1,tocIndex:1},{value:"\u6BD4\u8F83\u6570\u7EC4\u4E2D\u95F4\u5143\u7D20\u4E0E\u67E5\u627E\u5143\u7D20\u7684\u5927\u5C0F\u3002",paraId:2,tocIndex:1},{value:"\u5982\u679C\u4E2D\u95F4\u5143\u7D20\u7B49\u4E8E\u67E5\u627E\u5143\u7D20\uFF0C\u5219\u67E5\u627E\u6210\u529F\u3002",paraId:3,tocIndex:1},{value:"\u5982\u679C\u4E2D\u95F4\u5143\u7D20\u5927\u4E8E\u67E5\u627E\u5143\u7D20\uFF0C\u5219\u641C\u7D22\u5DE6\u534A\u90E8\u5206\u3002",paraId:4,tocIndex:1},{value:"\u5982\u679C\u4E2D\u95F4\u5143\u7D20\u5C0F\u4E8E\u67E5\u627E\u5143\u7D20\uFF0C\u5219\u641C\u7D22\u53F3\u534A\u90E8\u5206\u3002",paraId:5,tocIndex:1},{value:"\u91CD\u590D\u6B65\u9AA4 2-5\uFF0C\u76F4\u5230\u627E\u5230\u6216\u786E\u5B9A\u5143\u7D20\u4E0D\u5B58\u5728\u3002",paraId:6,tocIndex:1},{value:"\u4E8C\u5206\u67E5\u627E\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(log n)\uFF0C\u5176\u4E2D n \u4E3A\u6570\u7EC4\u7684\u957F\u5EA6\u3002",paraId:7,tocIndex:2},{value:`/**
 *
 * @param list \u9700\u8981\u67E5\u627E\u7684\u6570\u7EC4
 * @param target \u9700\u8981\u67E5\u627E\u7684\u5143\u7D20
 * @return \u5982\u679C\u627E\u5230\uFF0C\u8FD4\u56DE\u5143\u7D20\u7684\u7D22\u5F15\uFF1B\u5426\u5219\u8FD4\u56DE-1
 */
function binarySearchBasic(list: number[], target: number): number {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      // \u627E\u5230\u76EE\u6807\u5143\u7D20
      return mid;
    } else if (list[mid] < target) {
      // \u76EE\u6807\u5143\u7D20\u5728\u53F3\u534A\u90E8\u5206\uFF0C\u66F4\u65B0\u5DE6\u8FB9\u754C\uFF0C\u7EE7\u7EED\u67E5\u627E
      // \u6CE8\u610Fmid+1\uFF0C\u5426\u5219\u4F1A\u6B7B\u5FAA\u73AF,\u5F53left + 1 = right\u6216\u8005left = right \u65F6\u5019, mid = (left + right) / 2 = left
      left = mid + 1;
    } else {
      // \u76EE\u6807\u5143\u7D20\u5728\u5DE6\u534A\u90E8\u5206
      // \u6CE8\u610Fmid-1\uFF0C\u5426\u5219\u4F1A\u6B7B\u5FAA\u73AF, \u5F53left = right \u65F6\u5019, mid = (left + right) / 2 = right
      right = mid - 1;
    }
  }
  return -1;
}

// Test
const list = [1, 3, 5, 7, 9];
const target = 5;
const index = binarySearchBasic(list, target);
console.log(index); // Output: 2
`,paraId:8},{value:`/**
 *
 * @param list \u9700\u8981\u67E5\u627E\u7684\u6570\u7EC4
 * @param target \u9700\u8981\u67E5\u627E\u7684\u5143\u7D20
 * @return {number} \u5982\u679C\u627E\u5230, \u8FD4\u56DE\u5143\u7D20\u7684\u7D22\u5F15\uFF1B\u5426\u5219\u8FD4\u56DE-1
 */
function binarySearchBasic(list, target) {
  let left = 0;
  let right = list.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (list[mid] === target) {
      // \u627E\u5230\u76EE\u6807\u5143\u7D20
      return mid;
    } else if (list[mid] < target) {
      // \u76EE\u6807\u5143\u7D20\u5728\u53F3\u534A\u90E8\u5206\uFF0C\u66F4\u65B0\u5DE6\u8FB9\u754C\uFF0C\u7EE7\u7EED\u67E5\u627E
      // \u6CE8\u610Fmid+1\uFF0C\u5426\u5219\u4F1A\u6B7B\u5FAA\u73AF,\u5F53left + 1 = right\u6216\u8005left = right \u65F6\u5019, mid = (left + right) / 2 = left
      left = mid + 1;
    } else {
      // \u76EE\u6807\u5143\u7D20\u5728\u5DE6\u534A\u90E8\u5206
      // \u6CE8\u610Fmid-1\uFF0C\u5426\u5219\u4F1A\u6B7B\u5FAA\u73AF, \u5F53left = right \u65F6\u5019, mid = (left + right) / 2 = right
      right = mid - 1;
    }
  }
  return -1;
}

// Test
const list = [1, 3, 5, 7, 9];
const target = 5;
const index = binarySearchBasic(list, target);
console.log(index); // Output: 2
`,paraId:9},{value:`import org.junit.Assert;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;

public class TestBinarySearch {
    /**
     * @param list   \u9700\u8981\u67E5\u627E\u7684\u6570\u7EC4
     * @param target \u9700\u8981\u67E5\u627E\u7684\u5143\u7D20
     * @return \u5982\u679C\u627E\u5230\uFF0C\u8FD4\u56DE\u5143\u7D20\u7684\u7D22\u5F15\uFF1B\u5426\u5219\u8FD4\u56DE-1
     */
    public static int binarySearchBasic(int[] list, int target) {
        int left = 0;
        int right = list.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            if (list[mid] == target) {
                // \u627E\u5230\u76EE\u6807\u5143\u7D20
                return mid;
            } else if (list[mid] < target) {
                // \u76EE\u6807\u5143\u7D20\u5728\u53F3\u534A\u90E8\u5206\uFF0C\u66F4\u65B0\u5DE6\u8FB9\u754C\uFF0C\u7EE7\u7EED\u67E5\u627E
                // \u6CE8\u610Fmid+1\uFF0C\u5426\u5219\u4F1A\u6B7B\u5FAA\u73AF,\u5F53left + 1 = right\u6216\u8005left = right \u65F6\u5019, mid = (left + right) / 2 = left
                left = mid + 1;
            } else {
                // \u76EE\u6807\u5143\u7D20\u5728\u5DE6\u534A\u90E8\u5206
                // \u6CE8\u610Fmid-1\uFF0C\u5426\u5219\u4F1A\u6B7B\u5FAA\u73AF, \u5F53left = right \u65F6\u5019, mid = (left + right) / 2 = right
                right = mid - 1;
            }
        }
        return -1;
    }

    @Test
    @DisplayName("TestBinarySearch Basic Test")
    public void testBinarySearchBasic() {
        int[] list = {1, 3, 5, 7, 9};
        int target = 5;
        int index = binarySearchBasic(list, target);
        Assert.assertEquals(2, index);
    }
}

`,paraId:10}]},97535:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(7902);const a=[{value:`\u52A8\u6001\u89C4\u5212\uFF08Dynamic
Programming\uFF0CDP\uFF09\u662F\u4E00\u79CD\u5728\u6570\u5B66\u3001\u8BA1\u7B97\u673A\u79D1\u5B66\u3001\u7ECF\u6D4E\u5B66\u3001\u7BA1\u7406\u79D1\u5B66\u3001\u751F\u7269\u5B66\u3001\u63A7\u5236\u79D1\u5B66\u3001\u4F18\u5316\u7406\u8BBA\u3001\u4EBA\u5DE5\u667A\u80FD\u3001\u8BA1\u7B97\u673A\u56FE\u5F62\u5B66\u3001\u7535\u5B50\u7535\u8DEF\u8BBE\u8BA1\u3001\u901A\u4FE1\u5DE5\u7A0B\u3001\u63A7\u5236\u5DE5\u7A0B\u3001\u5DE5\u7A0B\u7ECF\u6D4E\u5B66\u3001\u6570\u7406\u7EDF\u8BA1\u3001\u5730\u7406\u4FE1\u606F\u79D1\u5B66\u3001\u4FE1\u606F\u5B89\u5168\u3001\u8BA1\u7B97\u6570\u5B66\u7B49\u9886\u57DF\u4E2D\u4F7F\u7528\u7684\uFF0C\u7528\u6765\u89E3\u51B3\u590D\u6742\u95EE\u9898\u7684\u4E00\u79CD\u65B9\u6CD5\u3002`,paraId:0,tocIndex:0},{value:"\u52A8\u6001\u89C4\u5212\u7684\u57FA\u672C\u601D\u60F3\u662F\u5C06\u590D\u6742\u95EE\u9898\u5206\u89E3\u6210\u5B50\u95EE\u9898\uFF0C\u5148\u6C42\u89E3\u5B50\u95EE\u9898\uFF0C\u518D\u7EC4\u5408\u5B50\u95EE\u9898\u7684\u89E3\u5F97\u5230\u539F\u95EE\u9898\u7684\u89E3\u3002\u52A8\u6001\u89C4\u5212\u5E38\u7528\u4E8E\u6C42\u89E3\u6700\u4F18\u5316\u95EE\u9898\uFF0C\u5373\u5BFB\u627E\u6700\u4F18\u89E3\u3002",paraId:1,tocIndex:0},{value:"\u52A8\u6001\u89C4\u5212\u7684\u6B65\u9AA4\uFF1A",paraId:2,tocIndex:0},{value:"\u5B9A\u4E49\u5B50\u95EE\u9898\uFF1A\u5C06\u539F\u95EE\u9898\u5206\u89E3\u6210\u82E5\u5E72\u4E2A\u5B50\u95EE\u9898\uFF0C\u6BCF\u4E2A\u5B50\u95EE\u9898\u90FD\u4E0E\u539F\u95EE\u9898\u7684\u67D0\u4E00\u90E8\u5206\u76F8\u5173\u3002",paraId:3,tocIndex:0},{value:"\u9012\u5F52\u5B9A\u4E49\u5B50\u95EE\u9898\u7684\u89E3\uFF1A\u7528\u9012\u5F52\u516C\u5F0F\u5B9A\u4E49\u6BCF\u4E2A\u5B50\u95EE\u9898\u7684\u89E3\uFF0C\u5373\u7528\u5B50\u95EE\u9898\u7684\u89E3\u6765\u5B9A\u4E49\u539F\u95EE\u9898\u7684\u89E3\u3002",paraId:4,tocIndex:0},{value:"\u8BA1\u7B97\u5B50\u95EE\u9898\u7684\u89E3\uFF1A\u7528\u81EA\u5E95\u5411\u4E0A\u7684\u65B9\u6CD5\u8BA1\u7B97\u51FA\u6BCF\u4E2A\u5B50\u95EE\u9898\u7684\u89E3\uFF0C\u5373\u5148\u6C42\u89E3\u5B50\u95EE\u9898\u7684\u89E3\uFF0C\u518D\u7EC4\u5408\u5B50\u95EE\u9898\u7684\u89E3\u5F97\u5230\u539F\u95EE\u9898\u7684\u89E3\u3002",paraId:5,tocIndex:0},{value:"\u5B58\u50A8\u5B50\u95EE\u9898\u7684\u89E3\uFF1A\u5C06\u5B50\u95EE\u9898\u7684\u89E3\u5B58\u50A8\u8D77\u6765\uFF0C\u907F\u514D\u91CD\u590D\u8BA1\u7B97\u3002",paraId:6,tocIndex:0},{value:"\u5229\u7528\u5B50\u95EE\u9898\u7684\u89E3\uFF1A\u5229\u7528\u5B50\u95EE\u9898\u7684\u89E3\u6765\u6C42\u89E3\u539F\u95EE\u9898\u3002",paraId:7,tocIndex:0},{value:"\u52A8\u6001\u89C4\u5212\u7684\u4F18\u70B9\uFF1A",paraId:8,tocIndex:0},{value:"\u6700\u4F18\u5B50\u7ED3\u6784\uFF1A\u52A8\u6001\u89C4\u5212\u89E3\u51B3\u7684\u95EE\u9898\u5177\u6709\u6700\u4F18\u5B50\u7ED3\u6784\uFF0C\u5373\u5C40\u90E8\u6700\u4F18\u89E3\u80FD\u51B3\u5B9A\u5168\u5C40\u6700\u4F18\u89E3\u3002",paraId:9,tocIndex:0},{value:"\u91CD\u53E0\u5B50\u95EE\u9898\uFF1A\u52A8\u6001\u89C4\u5212\u901A\u8FC7\u5B58\u50A8\u5B50\u95EE\u9898\u7684\u89E3\u6765\u907F\u514D\u91CD\u590D\u8BA1\u7B97\uFF0C\u56E0\u6B64\u53EF\u4EE5\u8282\u7701\u65F6\u95F4\u3002",paraId:10,tocIndex:0},{value:"\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\uFF1A\u52A8\u6001\u89C4\u5212\u7684\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u5F80\u5F80\u662F\u9012\u5F52\u516C\u5F0F\uFF0C\u6613\u4E8E\u7406\u89E3\u548C\u5B9E\u73B0\u3002",paraId:11,tocIndex:0},{value:"\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A\u52A8\u6001\u89C4\u5212\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4E0E\u95EE\u9898\u7684\u89C4\u6A21\u6709\u5173\uFF0C\u662F\u4E00\u79CD\u7EBF\u6027\u65F6\u95F4\u590D\u6742\u5EA6\u3002",paraId:12,tocIndex:0},{value:"\u4E0D\u540C\u8DEF\u5F84",paraId:13,tocIndex:1},{value:"\u4E0D\u540C\u8DEF\u5F84 II",paraId:13,tocIndex:1},{value:"\u6700\u5C0F\u8DEF\u5F84\u548C",paraId:13,tocIndex:1},{value:"\u722C\u697C\u68AF II",paraId:13,tocIndex:1},{value:"\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A",paraId:13,tocIndex:1},{value:"\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A II",paraId:13,tocIndex:1},{value:"\u4E70\u5356\u80A1\u7968\u7684\u6700\u4F73\u65F6\u673A III",paraId:13,tocIndex:1},{value:"\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217",paraId:13,tocIndex:1},{value:"\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217",paraId:13,tocIndex:1},{value:"\u7F16\u8F91\u8DDD\u79BB",paraId:13,tocIndex:1},{value:"\u6253\u5BB6\u52AB\u820D",paraId:13,tocIndex:1},{value:"\u6253\u5BB6\u52AB\u820D II",paraId:13,tocIndex:1},{value:"\u6253\u5BB6\u52AB\u820D III",paraId:13,tocIndex:1},{value:"\u6700\u5927\u5B50\u5E8F\u548C",paraId:13,tocIndex:1},{value:"\u6700\u5927\u5B50\u5E8F\u548C II",paraId:13,tocIndex:1},{value:"\u6700\u5927\u5B50\u5E8F\u548C III",paraId:13,tocIndex:1},{value:"\u6700\u5927\u6B63\u65B9\u5F62",paraId:13,tocIndex:1},{value:"\u4E0D\u540C\u5C9B\u5C7F\u7684\u6570\u91CF",paraId:13,tocIndex:1},{value:"\u5C9B\u5C7F\u6570\u91CF",paraId:13,tocIndex:1},{value:"\u6700\u957F\u56DE\u6587\u5B50\u4E32",paraId:13,tocIndex:1},{value:"\u6700\u957F\u56DE\u6587\u5B50\u5E8F\u5217",paraId:13,tocIndex:1},{value:"\u6700\u957F\u516C\u5171\u5B50\u4E32",paraId:13,tocIndex:1},{value:"\u6700\u957F\u516C\u5171\u5E8F\u5217",paraId:13,tocIndex:1},{value:"\u6700\u957F\u516C\u5171\u524D\u7F00",paraId:13,tocIndex:1},{value:"\u6700\u957F\u56DE\u6587\u5B50\u5E8F\u5217",paraId:13,tocIndex:1},{value:"\u722C\u697C\u68AF",paraId:14},{value:"\u5047\u8BBE\u4F60\u6B63\u5728\u722C\u697C\u68AF\u3002\u9700\u8981 n \u9636\u4F60\u624D\u80FD\u5230\u8FBE\u697C\u9876\u3002\u6BCF\u6B21\u4F60\u53EF\u4EE5\u722C 1 \u6216 2 \u4E2A\u53F0\u9636\u3002\u4F60\u6709\u591A\u5C11\u79CD\u4E0D\u540C\u7684\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u5462\uFF1F",paraId:15,tocIndex:3},{value:"\u793A\u4F8B 1\uFF1A",paraId:16,tocIndex:3},{value:`\u8F93\u5165\uFF1An = 2
\u8F93\u51FA\uFF1A2
\u89E3\u91CA\uFF1A\u6709\u4E24\u79CD\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u3002
1. 1 \u9636 + 1 \u9636
2. 2 \u9636
`,paraId:17,tocIndex:3},{value:"\u793A\u4F8B 2\uFF1A",paraId:18,tocIndex:3},{value:`\u8F93\u5165\uFF1An = 3
\u8F93\u51FA\uFF1A3
\u89E3\u91CA\uFF1A\u6709\u4E09\u79CD\u65B9\u6CD5\u53EF\u4EE5\u722C\u5230\u697C\u9876\u3002
1. 1 \u9636 + 1 \u9636 + 1 \u9636
2. 1 \u9636 + 2 \u9636
3. 2 \u9636 + 1 \u9636
`,paraId:19,tocIndex:3},{value:"\u63D0\u793A\uFF1A",paraId:20,tocIndex:3},{value:"1 <= n <= 45",paraId:21,tocIndex:3},{value:"\u6458\u6A31\u6843",paraId:14}]},29886:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(17531);const a=[{value:"https://angular.cn/guide/dynamic-form",paraId:0,tocIndex:1}]},75008:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(14835);const a=[]},77336:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(23105);const a=[{value:"\u5148\u4F7F\u7528",paraId:0,tocIndex:0},{value:"angualr-cli",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u4E00\u4E2A Angular \u5E93\u9879\u76EE\uFF1A",paraId:0,tocIndex:0},{value:`ng new ngx-pro-components
`,paraId:1,tocIndex:0},{value:"\u7136\u540E\u8FDB\u5165\u9879\u76EE\u76EE\u5F55\uFF0C\u521B\u5EFA\u4E00\u4E2A",paraId:2,tocIndex:0},{value:"table",paraId:2,tocIndex:0},{value:"\u7EC4\u4EF6\u5E93, \u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A",paraId:2,tocIndex:0},{value:`ng generate library table --prefix=an
`,paraId:3,tocIndex:0},{value:"\u5176\u4E2D",paraId:4,tocIndex:0},{value:"--prefix",paraId:4,tocIndex:0},{value:"\u53C2\u6570\u662F\u7ED9 Angular \u7EC4\u4EF6\u8BBE\u7F6E\u524D\u7F00\uFF0C\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u559C\u597D\u8BBE\u7F6E\u3002",paraId:4,tocIndex:0},{value:"\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5E93\u7684\u65F6\u5019\uFF0C\u4F1A\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B\u521B\u5EFA\u4E00\u4E2A",paraId:5,tocIndex:0},{value:"projects",paraId:5,tocIndex:0},{value:"\u76EE\u5F55\uFF0C\u91CC\u9762\u5305\u542B\u4E86",paraId:5,tocIndex:0},{value:"table",paraId:5,tocIndex:0},{value:"\u5E93\u7684\u6E90\u7801\u3002",paraId:5,tocIndex:0},{value:"\u5E76\u4E14\u5728",paraId:6,tocIndex:0},{value:"angular.json",paraId:6,tocIndex:0},{value:"\u6587\u4EF6\u4E2D\u4F1A\u81EA\u52A8\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u9879\u76EE\u914D\u7F6E\uFF1A",paraId:6,tocIndex:0},{value:`{
  "projects": {
    "table": {
      "projectType": "library",
      "root": "projects/table",
      "sourceRoot": "projects/table/src",
      "prefix": "an",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:ng-packagr",
          "options": {
            "project": "projects/table/ng-package.json"
          },
          "configurations": {
            "production": {
              "tsConfig": "projects/table/tsconfig.lib.prod.json"
            },
            "development": {
              "tsConfig": "projects/table/tsconfig.lib.json"
            }
          },
          "defaultConfiguration": "production"
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "tsConfig": "projects/table/tsconfig.spec.json",
            "polyfills": ["zone.js", "zone.js/testing"]
          }
        }
      }
    }
  }
}
`,paraId:7,tocIndex:0},{value:"\u5BF9",paraId:8,tocIndex:0},{value:"angular.json",paraId:8,tocIndex:0},{value:"\u6587\u4EF6\u505A\u4E00\u70B9\u5C0F\u8C03\u6574\uFF0C \u5C06",paraId:8,tocIndex:0},{value:"projects",paraId:8,tocIndex:0},{value:"\u914D\u7F6E\u4E0B\u7684",paraId:8,tocIndex:0},{value:"table",paraId:8,tocIndex:0},{value:"\u6539\u4E3A",paraId:8,tocIndex:0},{value:"@angle/table",paraId:8,tocIndex:0},{value:`{
  "projects": {
-    "table": {
+    "@angle/table": {
      }
    }
  }
}
`,paraId:9,tocIndex:0},{value:"\u7136\u540E\u5BF9",paraId:10,tocIndex:0},{value:"tsconfig.json",paraId:10,tocIndex:0},{value:"\u6587\u4EF6\u7684\u522B\u540D\u8BBE\u7F6E\u505A\u4E00\u4E0B\u8C03\u6574\uFF1A",paraId:10,tocIndex:0},{value:`{
  "compileOnSave": false,
  "compilerOptions": {
    "paths": {
-     "table": [
+     "@angle/table": [
-       "./dist/table"
+       "./projects/table/src/public-api.ts"
      ]
    }
  }
}
`,paraId:11,tocIndex:0},{value:"\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u5176\u4ED6\u9879\u76EE\u4E2D\u4F7F\u7528",paraId:12,tocIndex:0},{value:"@angle/table",paraId:12,tocIndex:0},{value:"\u5E93\u4E86\u3002",paraId:12,tocIndex:0},{value:"\u5982\u679C\u4E0D\u5BF9",paraId:13,tocIndex:0},{value:"tsconfig.json",paraId:13,tocIndex:0},{value:"\u6587\u4EF6\u505A\u8C03\u6574\u4E5F\u53EF\u4EE5\uFF0C\u53EA\u662F\u5728\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u9700\u8981\u8FD0\u884C",paraId:13,tocIndex:0},{value:"ng build @angle/table --watch",paraId:13,tocIndex:0},{value:", \u7136\u540E\u5728\u9879\u76EE\u4E2D",paraId:13,tocIndex:0},{value:"import { TableModule } from '@angle/table';",paraId:13,tocIndex:0},{value:`\u4F7F\u7528\uFF0C\u5F53\u5E93\u591A\u7684\u65F6\u5019
\u9700\u8981\u8FD0\u884C\u7684\u5C31\u591A\uFF0C\u6240\u4EE5\u6211\u5BF9`,paraId:13,tocIndex:0},{value:"tsconfig.json",paraId:13,tocIndex:0},{value:"\u505A\u4E86\u8C03\u6574\u3002",paraId:13,tocIndex:0},{value:"\u4EE5\u4E0A\u5C31\u521B\u5EFA\u4E86\u4E00\u4E2A Angular \u5E93\uFF0C\u540C\u6837\u7684\u6B65\u9AA4\uFF0C\u53EF\u4EE5\u7EE7\u7EED\u521B\u5EFA\u5176\u4ED6\u7EC4\u4EF6\u5E93\uFF0C\u53EA\u9700\u8981\u628A",paraId:14,tocIndex:0},{value:"table",paraId:14,tocIndex:0},{value:"\u6539\u6210\u5176\u4ED6\u540D\u5B57\u5373\u53EF\u3002",paraId:14,tocIndex:0},{value:"\u73B0\u5728\u7EE7\u7EED\u521B\u5EFA",paraId:15,tocIndex:0},{value:"form",paraId:15,tocIndex:0},{value:"\u5E93",paraId:15,tocIndex:0},{value:"\u8FD0\u884C ",paraId:16,tocIndex:0},{value:"ng generate library form --prefix=an",paraId:16,tocIndex:0},{value:"\u5728 ",paraId:17,tocIndex:0},{value:"angular.json",paraId:17,tocIndex:0},{value:" \u6587\u4EF6\u4E2D\u5C06 ",paraId:17,tocIndex:0},{value:"projects->form",paraId:17,tocIndex:0},{value:" \u6539\u4E3A ",paraId:17,tocIndex:0},{value:"projects->@angle/form",paraId:17,tocIndex:0},{value:"\u5728 ",paraId:18,tocIndex:0},{value:"tsconfig.json",paraId:18,tocIndex:0},{value:" \u6587\u4EF6\u4E2D\u5C06 ",paraId:18,tocIndex:0},{value:"paths",paraId:18,tocIndex:0},{value:" \u4E0B\u7684 ",paraId:18,tocIndex:0},{value:"form",paraId:18,tocIndex:0},{value:" \u6539\u4E3A ",paraId:18,tocIndex:0},{value:"@angle/form",paraId:18,tocIndex:0},{value:"\u5728 ",paraId:19,tocIndex:0},{value:"table",paraId:19,tocIndex:0},{value:" \u5E93\u9700\u8981\u4F7F\u7528 ",paraId:19,tocIndex:0},{value:"form",paraId:19,tocIndex:0},{value:" \u5E93\u7684\u5185\u5BB9\uFF0C\u53EA\u9700\u8981",paraId:19,tocIndex:0},{value:"impot { FormXxxComponent } from '@angle/form';",paraId:19,tocIndex:0},{value:"\u5373\u53EF,\u4E0D\u8981\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u5426\u8005\u6253\u5305\u4E4B\u540E\u53BB\u4F7F\u7528\u7684\u65F6\u5019\u4F1A\u51FA\u95EE\u9898.",paraId:19,tocIndex:0}]},17760:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(22314);const a=[{value:"This is the basic section of the documentation.",paraId:0,tocIndex:0}]},9084:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(15347);const a=[{value:"This is the world page.",paraId:0,tocIndex:0}]},76936:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(50197);const a=[{value:`# \u5148\u627E\u4E2A\u5730\u65B9\u5EFA\u4E2A\u7A7A\u76EE\u5F55\u3002
$ mkdir myapp && cd myapp

# \u901A\u8FC7\u5B98\u65B9\u5DE5\u5177\u521B\u5EFA\u9879\u76EE\uFF0C\u9009\u62E9\u4F60\u9700\u8981\u7684\u6A21\u677F
$ npx create-dumi

# \u9009\u62E9\u4E00\u4E2A\u6A21\u677F, \u8FD9\u91CC\u9009\u62E9 React Library \u6A21\u677F
$ ? Pick template type \u203A - Use arrow-keys. Return to submit.
$     Static Site # \u7528\u4E8E\u6784\u5EFA\u7F51\u7AD9
$ \u276F   React Library # \u7528\u4E8E\u6784\u5EFA\u7EC4\u4EF6\u5E93\uFF0C\u6709\u7EC4\u4EF6\u4F8B\u5B50
$     Theme Package # \u4E3B\u9898\u5305\u5F00\u53D1\u811A\u624B\u67B6\uFF0C\u7528\u4E8E\u5F00\u53D1\u4E3B\u9898\u5305

# \u5B89\u88C5\u4F9D\u8D56\u540E\u542F\u52A8\u9879\u76EE
$ npm start
`,paraId:0,tocIndex:0}]},60603:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(1931);const a=[{value:"dumi",paraId:0,tocIndex:0},{value:"\u6E32\u67D3\u4EE3\u7801\u5757\u4E3B\u8981\u4F7F\u7528",paraId:0,tocIndex:0},{value:"SourceCode",paraId:0,tocIndex:0},{value:"\u7EC4\u4EF6\uFF0C\u53EA\u9700\u8981\u5C06\u8FD9\u4E2A\u7EC4\u4EF6\u66FF\u6362\u4E3A\u81EA\u5DF1\u7684\u7EC4\u4EF6\u5373\u53EF\uFF0C\u4E0B\u9762\u662F\u5B9A\u5236\u4EE3\u7801\u5757\u7684\u6B65\u9AA4\uFF1A",paraId:0,tocIndex:0},{value:"\u5728",paraId:1,tocIndex:0},{value:".dumi/theme/builtins/SourceCode",paraId:1,tocIndex:0},{value:"\u76EE\u5F55\u4E0B\u521B\u5EFA",paraId:1,tocIndex:0},{value:"index.tsx",paraId:1,tocIndex:0},{value:"\u6587\u4EF6\uFF0C\u6CA1\u6709\u8BE5\u76EE\u5F55\u624B\u52A8\u521B\u5EFA\u5373\u53EF, ",paraId:1,tocIndex:0},{value:".dumi",paraId:1,tocIndex:0},{value:"\u548C",paraId:1,tocIndex:0},{value:"src",paraId:1,tocIndex:0},{value:"\u3001",paraId:1,tocIndex:0},{value:"docs",paraId:1,tocIndex:0},{value:"\u76EE\u5F55\u540C\u7EA7, \u5185\u5BB9\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:`import OriginSourceCode, {
  ISourceCodeProps,
} from 'dumi/theme-default/builtins/SourceCode';
import * as monaca from 'monaco-editor';
import React, { useEffect, useRef } from 'react';

const SourceCode: React.FC<ISourceCodeProps> = (props) => {
  // \u7B80\u5355\u8BED\u8A00\u76F4\u63A5\u4F7F\u7528\u539F\u7EC4\u4EF6\u6E32\u67D3
  const simpleLanguages: string[] = ['text', 'shell'];
  if (!props.lang || simpleLanguages.includes(props.lang)) {
    return <OriginSourceCode {...props}>{props.children}</OriginSourceCode>;
  }
  // \u4EE3\u7801\u884C\u6570
  const lineCount: number = props.children.split('\\n').length;
  // \u8BED\u8A00\u6620\u5C04, \u8FD9\u91CC\u6211\u53EA\u6DFB\u52A0\u4E86 ts \u548C tsx, \u9047\u5230\u5176\u4ED6\u4E0D\u9002\u914D\u7684\u5728\u6DFB\u52A0\u5373\u53EF
  const languageMap: any = {
    ts: 'typescript',
    tsx: 'typescript',
  };
  const ref = useRef<any>(null);
  useEffect(() => {
    const editor = monaca.editor.create(ref.current, {
      value: props.children,
      language: languageMap[props.lang] || props.lang,
      readOnly: true,
      wordWrap: 'on',
      automaticLayout: true,
      scrollBeyondLastLine: false,
    });
  }, []);
  // \u5176\u4ED6\u8BED\u8A00\u4F7F\u7528monaco\u6E32\u67D3
  return (
    <pre
      style={{
        // lineCount\u672C\u6765\u9700\u8981\u4E58\u4EE5 18\uFF0C \u4E3A\u4E86\u4E0D\u663E\u793A\u592A\u591A\uFF0C\u6211\u8FD9\u91CC\u6539\u4E3A\u4E86 10
        height: \`\${lineCount * 10 + 20}px\`,
      }}
      ref={ref}
    ></pre>
  );
};

export default SourceCode;
`,paraId:2,tocIndex:0}]},89252:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(86797);const a=[{value:"\u53EF\u4EE5\u5728 d-umi \u7684",paraId:0,tocIndex:0},{value:"\u4E3B\u9898\u5E02\u573A",paraId:0,tocIndex:0},{value:"\u4E2D\u627E\u5230\u81EA\u5DF1\u60F3\u8981\u7684\u4E3B\u9898\uFF0C\u4F8B\u5982\u5B89\u88C5",paraId:0,tocIndex:0},{value:"dumi-theme-antd",paraId:0,tocIndex:0},{value:"\u4E3B\u9898\u3002\u5176\u4ED6\u4E3B\u9898\u7684\u914D\u7F6E\u65B9\u6CD5\u7C7B\u4F3C\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u518D\u8D58\u8FF0\u3002",paraId:0,tocIndex:0},{value:"\u5B89\u88C5\u4E4B\u540E\uFF0C\u65E0\u9700\u505A\u4EFB\u4F55\u914D\u7F6E\uFF0Cdumi \u4F1A\u81EA\u52A8\u52A0\u8F7D\u4E3B\u9898\u3002\u52A0\u8F7D\u89C4\u5219\u5728 dumi \u7684",paraId:1},{value:"\u914D\u7F6E\u6587\u6863",paraId:1},{value:"\u4E2D\u6709\u8BE6\u7EC6\u8BF4\u660E\u3002",paraId:1}]},51446:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(68537);const a=[]},21976:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(53516);const a=[{value:"\u4F7F\u7528 npm \u5B89\u88C5",paraId:0,tocIndex:0}]},47855:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(48230);const a=[]},18591:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(9285);const a=[{value:"npm \u5B89\u88C5\u4F9D\u8D56",paraId:0,tocIndex:0}]},46161:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(79209);const a=[{value:"pnpm \u7684\u5DE5\u4F5C\u7A7A\u95F4\u529F\u80FD\u53EF\u4EE5\u8BA9\u4F60\u5728\u4E00\u4E2A\u6587\u4EF6\u5939\u4E0B\u7BA1\u7406\u591A\u4E2A\u5305\u3002\u4F60\u53EF\u4EE5\u5728\u8BE5\u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u591A\u4E2A\u5305\uFF0C\u6BCF\u4E2A\u5305\u90FD\u6709\u81EA\u5DF1\u7684 ",paraId:0,tocIndex:0},{value:"package.json",paraId:0,tocIndex:0},{value:" \u6587\u4EF6\uFF0C\u5E76\u4E14\u53EF\u4EE5\u4E92\u76F8\u4F9D\u8D56\u3002",paraId:0,tocIndex:0},{value:"\u521B\u5EFA\u4E00\u4E2A\u7A7A\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u5728\u8BE5\u6587\u4EF6\u5939\u4E0B\u8FD0\u884C ",paraId:1,tocIndex:1},{value:"pnpm init",paraId:1,tocIndex:1},{value:"\uFF0C\u521B\u5EFA ",paraId:1,tocIndex:1},{value:"package.json",paraId:1,tocIndex:1},{value:" \u6587\u4EF6\u3002",paraId:1,tocIndex:1},{value:"\u5728",paraId:2,tocIndex:1},{value:"package.json",paraId:2,tocIndex:1},{value:"\u540C\u7EA7\u76EE\u5F55\u4E0B\u521B\u5EFA",paraId:2,tocIndex:1},{value:"pnpm-workspace.yaml",paraId:2,tocIndex:1},{value:"\u6587\u4EF6\uFF0C\u5E76\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\uFF1A",paraId:2,tocIndex:1},{value:`packages:
  - 'packages/*'
  - 'apps/*'
`,paraId:3,tocIndex:1},{value:"\u5176\u4E2D",paraId:4,tocIndex:1},{value:"apps",paraId:4,tocIndex:1},{value:"\u6587\u4EF6\u5939\u4E0B\u5B58\u653E\u7684\u662F\u5E94\u7528\uFF0C",paraId:4,tocIndex:1},{value:"packages",paraId:4,tocIndex:1},{value:"\u6587\u4EF6\u5939\u4E0B\u5B58\u653E\u7684\u662F\u5E93\u3002",paraId:4,tocIndex:1},{value:"\u6587\u4EF6\u7ED3\u6784\u5982\u4E0B\uFF1A",paraId:5,tocIndex:1},{value:`root
\u251C\u2500\u2500 packages
\u251C\u2500\u2500 apps
\u251C\u2500\u2500 package.json
\u2514\u2500\u2500 pnpm-workspace.yaml
`,paraId:6,tocIndex:1},{value:"\u5E94\u7528\u521B\u5EFA\u5728",paraId:7,tocIndex:2},{value:"apps",paraId:7,tocIndex:2},{value:"\u76EE\u5F55\u4E0B\uFF0C\u4E0B\u9762\u4EE5",paraId:7,tocIndex:2},{value:"umi.js",paraId:7,tocIndex:2},{value:"\u7684\u811A\u624B\u67B6\u4E3A\u4F8B\uFF0C\u521B\u5EFA\u4E24\u4E2A",paraId:7,tocIndex:2},{value:"react",paraId:7,tocIndex:2},{value:"\u5E94\u7528\u3002",paraId:7,tocIndex:2},{value:"\u5728",paraId:8,tocIndex:2},{value:"apps",paraId:8,tocIndex:2},{value:"\u76EE\u5F55\u4E0B\u521B\u5EFA",paraId:8,tocIndex:2},{value:"simple-umi-app",paraId:8,tocIndex:2},{value:"\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u8FDB\u5165\u76EE\u5F55\u4E0B\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4:",paraId:8,tocIndex:2},{value:`$ pnpm dlx create-umi@latest

# \u8F93\u51FA\u5982\u4E0B
Packages: +40
++++++++++++++++++++++++++++++++++++++++
Progress: resolved 40, reused 40, downloaded 0, added 40, done
\u250C   create-umi
\u2502
\u25CB  Pick Umi App Template
\u2502  Simple App
\u2502
\u25CB  Pick Npm Client
\u2502  pnpm
\u2502
\u25CB  Pick Npm Registry
\u2502  taobao
\u2502
\u2514  You're all set!
`,paraId:9,tocIndex:2},{value:"\u5728",paraId:10,tocIndex:2},{value:"apps",paraId:10,tocIndex:2},{value:"\u76EE\u5F55\u4E0B\u521B\u5EFA",paraId:10,tocIndex:2},{value:"ant-umi-app",paraId:10,tocIndex:2},{value:"\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u8FDB\u5165\u76EE\u5F55\u4E0B\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4:",paraId:10,tocIndex:2},{value:`$ pnpm dlx create-umi@latest

# \u8F93\u51FA\u5982\u4E0B
Packages: +40
++++++++++++++++++++++++++++++++++++++++
Progress: resolved 40, reused 40, downloaded 0, added 40, done
\u250C   create-umi
\u2502
\u25CB  Pick Umi App Template
\u2502  Ant Design Pro
\u2502
\u25CB  Pick Npm Client
\u2502  pnpm
\u2502
\u25CB  Pick Npm Registry
\u2502  taobao
\u2502
\u2514  You're all set!

`,paraId:11,tocIndex:2},{value:"\u5728",paraId:12,tocIndex:2},{value:"simple-umi-app",paraId:12,tocIndex:2},{value:"\u548C",paraId:12,tocIndex:2},{value:"ant-umi-app",paraId:12,tocIndex:2},{value:"\u76EE\u5F55\u4E0B\u90FD\u6709",paraId:12,tocIndex:2},{value:"package.json",paraId:12,tocIndex:2},{value:"\u6587\u4EF6\uFF0C\u7BA1\u7406\u7684\u662F\u81EA\u5DF1\u7684\u4F9D\u8D56\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5176\u4ED6\u5E94\u7528\u7684\u4F9D\u8D56\uFF0C\u5982\u679C\u6709\u76F8\u540C\u7684\u4F9D\u8D56\uFF0C\u53EF\u4EE5\u63D0\u5230\u6839\u76EE\u5F55\u4E0B\uFF0C\u7EDF\u4E00\u7BA1\u7406\u3002",paraId:12,tocIndex:2},{value:"\u6BD4\u5982\u4E0B\u9762\u8FD9\u4E9B\u4F9D\u8D56\u662F\u5171\u7528\u7684",paraId:13,tocIndex:2},{value:`{
  "dependencies": {
    "@ant-design/icons": "^5.0.1",
    "@ant-design/pro-components": "^2.4.4",
    "antd": "^5.4.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.33",
    "@types/react-dom": "^18.0.11",
    "typescript": "^5.0.3"
  }
}
`,paraId:14,tocIndex:2},{value:"\u90A3\u4E48\u5148\u79FB\u9664",paraId:15,tocIndex:2},{value:"apps",paraId:15,tocIndex:2},{value:"\u5E94\u7528\u4E0B\u7684\u4F9D\u8D56\uFF0C\u7136\u540E\u5728\u6839\u76EE\u5F55\u4E0B\u91CD\u65B0\u5B89\u88C5,\u5982\u679C\u4E0D\u60F3\u7528\u547D\u4EE4\uFF0C\u53EF\u4EE5\u624B\u52A8\u4FEE\u6539",paraId:15,tocIndex:2},{value:"package.json",paraId:15,tocIndex:2},{value:"\u6587\u4EF6\uFF0C\u7136\u540E\u5220\u9664",paraId:15,tocIndex:2},{value:"node_modules",paraId:15,tocIndex:2},{value:"\u76EE\u5F55\u548C",paraId:15,tocIndex:2},{value:"pnpm-lock.yaml",paraId:15,tocIndex:2},{value:`\u6587\u4EF6\uFF0C\u518D\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u3002
\u4E5F\u53EF\u4EE5\u4F7F\u7528`,paraId:15,tocIndex:2},{value:"pnpm",paraId:15,tocIndex:2},{value:"\u547D\u4EE4\u5148\u79FB\u9664\u5728\u5B89\u88C5\uFF0C\u6211\u8FD9\u91CC\u7B80\u5355\u5904\u7406\uFF0C\u5C31\u76F4\u63A5\u624B\u52A8\u4FEE\u6539\u4E86",paraId:15,tocIndex:2},{value:"package.json",paraId:15,tocIndex:2},{value:"\u6587\u4EF6\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56\u3002",paraId:15,tocIndex:2},{value:"\u5728",paraId:16,tocIndex:3},{value:"apps",paraId:16,tocIndex:3},{value:"\u7684",paraId:16,tocIndex:3},{value:"simple-umi-app",paraId:16,tocIndex:3},{value:"\u548C",paraId:16,tocIndex:3},{value:"ant-umi-app",paraId:16,tocIndex:3},{value:"\u90FD\u6709\u5BF9\u5E94\u7684",paraId:16,tocIndex:3},{value:"scripts",paraId:16,tocIndex:3},{value:"\u547D\u4EE4\uFF0C\u628A\u8FD9\u4E9B\u547D\u4EE4\u7EDF\u4E00\u5230\u6839\u76EE\u5F55\u7684",paraId:16,tocIndex:3},{value:"package.json",paraId:16,tocIndex:3},{value:"\u6587\u4EF6\u4E2D.",paraId:16,tocIndex:3},{value:`{
  "scripts": {
    "ant-umi-app:dev": "pnpm --filter ant-umi-app dev",
    "simple-umi-app:dev": "pnpm --filter simple-umi-app dev"
  }
}
`,paraId:17,tocIndex:3},{value:"\u811A\u672C\u540D\u79F0\u547D\u540D\u89C4\u5219\u53EF\u4EE5\u6839\u636E\u81EA\u5DF1\u7684\u559C\u597D\u6765\uFF0C\u6211\u559C\u6B22\u4F7F\u7528",paraId:18,tocIndex:3},{value:"\u5E94\u7528\u540D:\u547D\u4EE4",paraId:18,tocIndex:3},{value:"\u7684\u5F62\u5F0F\uFF0C\u6BD4\u5982",paraId:18,tocIndex:3},{value:'ant-umi-app:dev":',paraId:18,tocIndex:3},{value:"\u3001",paraId:18,tocIndex:3},{value:"simple-umi-app:dev",paraId:18,tocIndex:3},{value:"\uFF0C\u5E94\u7528\u591A\u4E86\u4E4B\u540E\u540C\u4E00\u4E2A\u5E94\u7528\u5728\u4E00\u4E2A\u8D77\uFF0C\u627E\u8D77\u6765\u4E5F\u5FEB\u4E00\u4E9B",paraId:18,tocIndex:3}]},66398:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(94420);const a=[{value:"React SortableJS \u7EC4\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u591A\u4E2A\u5217\u8868\u7684\u6392\u5E8F\u3002",paraId:0,tocIndex:0}]},55100:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(67412);const a=[{value:"Sortable.js \u5141\u8BB8\u4F60\u62D6\u62FD\u5143\u7D20\u5E76\u514B\u9686\u5B83\u4EEC\u3002",paraId:0,tocIndex:0}]},60980:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(5849);const a=[]},27284:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(57980);const a=[{value:"\u5B89\u88C5 ",paraId:0,tocIndex:0},{value:"react-sortablejs",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"sortablejs",paraId:0,tocIndex:0},{value:" \u4F9D\u8D56\u3002",paraId:0,tocIndex:0},{value:"\u518D\u5B89\u88C5 ",paraId:1},{value:"sortablejs",paraId:1},{value:" \u7684\u7C7B\u578B\u5B9A\u4E49\u6587\u4EF6 ",paraId:1},{value:"@types/sortablejs",paraId:1},{value:"\u3002",paraId:1}]},29822:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(28815);const a=[]},62942:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(31843);const a=[{value:"\u5148\u521B\u5EFA\u6587\u4EF6\u5939\uFF0C\u7136\u540E\u8FDB\u5165\u6587\u4EF6\u5939\uFF0C\u6267\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF1A",paraId:0,tocIndex:0},{value:`$ pnpm dlx create-umi@latest
Packages: +40
++++++++++++++++++++++++++++++++++++++++
Progress: resolved 40, reused 40, downloaded 0, added 40, done
\u250C   create-umi 
\u2502
\u25CF  Pick Umi App Template
\u2502  \u25CB Simple App
\u2502  \u25CB Ant Design Pro
\u2502  \u25CB Vue Simple App
\u2502  \u25CF Umi Plugin (for plugin development)
`,paraId:1,tocIndex:0},{value:"\u9009\u62E9 Umi Plugin \u6A21\u677F\uFF0C\u7136\u540E\u9009\u62E9pnpm,\u5728\u9009\u62E9\u6DD8\u5B9D\u6E90\uFF0C\u7136\u540E\u8F93\u5165\u9879\u76EE\u540D\u79F0\uFF0C\u5373\u53EF\u521B\u5EFA Umi \u63D2\u4EF6\u9879\u76EE\u3002",paraId:2,tocIndex:0},{value:`
  `,paraId:3},{value:`
    `,paraId:4},{value:`
          `,paraId:4},{value:"src",paraId:4},{value:`
          `,paraId:4},{value:`
            `,paraId:5},{value:`
              `,paraId:5},{value:"index.ts",paraId:5},{value:`
              `,paraId:5},{value:"\u63D2\u4EF6\u5165\u53E3\u6587\u4EF6",paraId:5},{value:`
            `,paraId:5},{value:`
          `,paraId:5},{value:`
        `,paraId:4},{value:`
    `,paraId:4},{value:`
      `,paraId:4},{value:".fatherrc.ts",paraId:4},{value:`
    `,paraId:4},{value:`
    `,paraId:4},{value:`
      `,paraId:4},{value:".ignore",paraId:4},{value:`
    `,paraId:4},{value:`
    `,paraId:4},{value:`
      `,paraId:4},{value:"package.json",paraId:4},{value:`
    `,paraId:4},{value:`
    `,paraId:4},{value:`
      `,paraId:4},{value:"README.md",paraId:4},{value:`
    `,paraId:4},{value:`
    `,paraId:4},{value:`
      `,paraId:4},{value:"tsconfig.json",paraId:4},{value:`
    `,paraId:4},{value:`
  `,paraId:4},{value:"\u5728",paraId:6,tocIndex:2},{value:"src/index.ts",paraId:6,tocIndex:2},{value:"\u6587\u4EF6\u4E2D\u7F16\u5199\u63D2\u4EF6\u903B\u8F91\uFF0C\u6BD4\u5982\uFF1A",paraId:6,tocIndex:2},{value:`import { IApi } from '@umijs/types';

export default (api: IApi) => {
  // See https://umijs.org/docs/guides/plugins
  api.describe({
    // \u914D\u7F6E\u4E2D\u8BE5\u63D2\u4EF6\u914D\u7F6E\u7684\u952E\u540D, .umirc.ts\u4E2D\u914D\u7F6E\u7684\u952E\u540D\u4E5F\u8981\u548C\u8FD9\u91CC\u7684key\u4E00\u81F4
    key: 'hello',
    config: {
      // \u63D2\u4EF6\u914D\u7F6E\u9879\u7684\u7C7B\u578B\uFF0C\u8FD9\u91CC\u662Fstring\u7C7B\u578B
      schema(joi) {
        return joi.string();
      }
    },
    // \u914D\u7F6E\u542F\u7528\uFF0C\u53EA\u6709\u914D\u7F6E\u63D2\u4EF6\u7684\u914D\u7F6E\u9879\u624D\u542F\u7528\u63D2\u4EF6
    enableBy: api.EnableBy.config
  });

  api.onStart(() => {
    console.log('hello plugin \u5F00\u59CB\u6267\u884C\u4E86');
  });

  api.onGenerateFiles(() => {
    api.writeTmpFile({
      path: 'index.ts',
      content: 'export const hello = "world";'
    });
  });
};
`,paraId:7,tocIndex:2},{value:"\u521B\u5EFA\u4E00\u4E2A\u7B80\u5355\u7684umi.js\u9879\u76EE\uFF0C\u7EE7\u7EED\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6587\u4EF6\u5939, \u7136\u540E\u6267\u884C",paraId:8,tocIndex:3},{value:"pnpm dlx create-umi@latest",paraId:8,tocIndex:3},{value:"\u547D\u4EE4\uFF0C\u8FD9\u91CC\u9009\u62E9",paraId:8,tocIndex:3},{value:"Ant Design Pro",paraId:8,tocIndex:3},{value:"\u6A21\u677F",paraId:8,tocIndex:3},{value:"\u7531\u4E8E\u6211\u4F7F\u7528\u7684\u662F",paraId:9,tocIndex:3},{value:"pnpm workspace",paraId:9,tocIndex:3},{value:"\uFF0C\u6240\u4EE5\u4E0D\u53D1\u5E03\u63D2\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5728\u9879\u76EE\u4E2D\u5B89\u88C5\u63D2\u4EF6\uFF1A",paraId:9,tocIndex:3},{value:"\u5176\u4E2D",paraId:10},{value:"bar",paraId:10},{value:"\u662F\u63D2\u4EF6\u540D\uFF0C",paraId:10},{value:"foo",paraId:10},{value:"\u662F\u9879\u76EE\u540D\u3002\u66F4\u591A",paraId:10},{value:"pnpm workspace",paraId:10},{value:"\u76F8\u5173\u547D\u4EE4\u8BF7\u53C2\u8003",paraId:10},{value:"\u5B98\u65B9\u6587\u6863",paraId:10},{value:"\u3002",paraId:10},{value:"\u5728",paraId:11},{value:".umirc.ts",paraId:11},{value:"\u4E2D\u914D\u7F6E\u63D2\u4EF6\uFF1A",paraId:11},{value:`export default {
  plugins: [
    'bar/src/index.ts', // \u63D2\u4EF6\u540D/\u63D2\u4EF6\u5165\u53E3\u6587\u4EF6, \u5982\u679C\u662F\u53D1\u5E03\u7684\u63D2\u4EF6\uFF0C\u5219\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u63D2\u4EF6\u540D\uFF0C\u5982\uFF1A'bar'\uFF0C\u8FD9\u91CC\u4F7F\u7528\u76F8\u5BF9\u8DEF\u5F84
  ],
  // \u8FD9\u91CC\u7684hello\u548Capi.describe\u65B9\u6CD5key\u4E00\u81F4
  hello: 'world', // \u63D2\u4EF6\u914D\u7F6E
}
`,paraId:12},{value:"\u542F\u52A8\u9879\u76EE\uFF0C\u53EF\u4EE5\u770B\u5230\u63A7\u5236\u53F0\u8F93\u51FA",paraId:13},{value:"hello plugin \u5F00\u59CB\u6267\u884C\u4E86",paraId:13},{value:"\uFF0C\u5E76\u4E14\u5728",paraId:13},{value:"src/.umi",paraId:13},{value:"\u76EE\u5F55\u4E0B\u751F\u6210\u4E86",paraId:13},{value:"plugin-hello/index.ts",paraId:13},{value:"\u6587\u4EF6\u3002",paraId:13},{value:"\u968F\u610F\u5728\u9879\u76EE\u7684\u4EFB\u610F\u4F4D\u7F6E\uFF0C\u4F7F\u7528",paraId:14},{value:"hello",paraId:14},{value:"\u53D8\u91CF\uFF0C\u53EF\u4EE5\u770B\u5230\u8F93\u51FA",paraId:14},{value:"world",paraId:14},{value:"\u3002",paraId:14},{value:`// \u8FD9\u91CC\u4F7F\u7528\u7684\u662F@umijs/max\uFF0C\u56FA\u5B9A\u7684
import { hello } from '@umijs/max';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  // \u968F\u4FBF\u6253\u5370\u4E00\u4E0Bhello\u53D8\u91CF\u7684\u503C\uFF0C\u548C.umirc.ts\u4E2D\u914D\u7F6E\u7684hello\u503C\u4E00\u6837
  console.log(hello);
  return (
    <PageContainer ghost>
      <div className={ styles.container }>
        <Guide name={ trim(name) } />
      </div>
    </PageContainer>
  );
};
`,paraId:15},{value:"\u672C\u6587\u4ECB\u7ECD\u4E86\u5982\u4F55\u521B\u5EFA\u4E00\u4E2A Umi \u63D2\u4EF6\u9879\u76EE\uFF0C\u7F16\u5199\u63D2\u4EF6\uFF0C\u4EE5\u53CA\u5982\u4F55\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u63D2\u4EF6\u3002",paraId:16,tocIndex:4}]},2064:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(28349);const a=[]},27766:function(o,e,n){n.r(e),n.d(e,{texts:function(){return a}});var t=n(42806);const a=[{value:"\u7B80\u5355\u5199\u4E00\u4E0B\u76EE\u5F55\u7ED3\u6784\uFF0C\u540E\u7EED\u5F85\u8865\u5145",paraId:0,tocIndex:1},{value:`\u251C\u2500\u2500 benchmarks
\u251C\u2500\u2500 examples
\u251C\u2500\u2500 flow
\u251C\u2500\u2500 packages
\u251C\u2500\u2500 scripts
\u251C\u2500\u2500 src
|   \u251C\u2500\u2500 compiler    // \u7F16\u8BD1\u76F8\u5173\u4EE3\u7801, \u5305\u62EC\u6A21\u677F\u7F16\u8BD1\u3001\u6837\u5F0F\u5904\u7406\u3001JSX \u8F6C\u6362\u7B49
|   \u251C\u2500\u2500 core        // \u6838\u5FC3\u4EE3\u7801, \u5305\u62EC\u6E32\u67D3\u3001\u865A\u62DF DOM\u3001\u6570\u636E\u54CD\u5E94\u7B49
|   \u251C\u2500\u2500 platforms   // \u5E73\u53F0\u76F8\u5173\u4EE3\u7801, \u5305\u62EC Web\u3001Weex\u3001\u5C0F\u7A0B\u5E8F\u7B49
|   \u251C\u2500\u2500 server      // \u670D\u52A1\u7AEF\u6E32\u67D3\u76F8\u5173\u4EE3\u7801
|   \u251C\u2500\u2500 sfc         // .vue \u6587\u4EF6\u89E3\u6790\u76F8\u5173\u4EE3\u7801
|   \u2514\u2500\u2500 shared      // \u5171\u4EAB\u4EE3\u7801, \u5305\u62EC\u5DE5\u5177\u51FD\u6570\u3001\u9519\u8BEF\u5904\u7406\u7B49
\u251C\u2500\u2500 test
\u251C\u2500\u2500 types
\u2514\u2500\u2500 yarn.lock
`,paraId:1,tocIndex:1},{value:"\u6267\u884C",paraId:2,tocIndex:2},{value:"package.json",paraId:2,tocIndex:2},{value:"\u91CC\u9762\u914D\u7F6E\u7684",paraId:2,tocIndex:2},{value:"dev",paraId:2,tocIndex:2},{value:"\u811A\u672C\u547D\u4EE4, \u5728\u6700\u540E\u9762\u52A0\u4E0A",paraId:2,tocIndex:2},{value:"--sourcemap",paraId:2,tocIndex:2},{value:"\u53C2\u6570",paraId:2,tocIndex:2},{value:`{
  "scripts": {
    "dev": "rollup -w -c scripts/config.js --environment TARGET:web-full-dev --sourcemap"
  }
}
`,paraId:3,tocIndex:2},{value:"\u5728",paraId:4,tocIndex:2},{value:"example",paraId:4,tocIndex:2},{value:"\u6587\u4EF6\u5939\u4E0B\u968F\u4FBF\u521B\u5EFA\u4E00\u4E2A",paraId:4,tocIndex:2},{value:"helloWorld.html",paraId:4,tocIndex:2},{value:"\u6587\u4EF6, \u7136\u540E\u7F16\u5199\u4E00\u4E2A\u7B80\u5355\u7684 vue \u6848\u4F8B, \u5728\u6D4F\u89C8\u5668\u6253\u5F00",paraId:4,tocIndex:2},{value:"helloWorld.html",paraId:4,tocIndex:2},{value:"\u6587\u4EF6\u5373\u53EF",paraId:4,tocIndex:2},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>
  <body>
    <div id="app">{{ message }}</div>

    <!--\u6587\u4EF6\u8DEF\u5F84\u6839\u636E\u521B\u5EFA\u4F4D\u7F6E\u8FDB\u884C\u8C03\u6574\u5373\u53EF-->
    <script src="../../dist/vue.js"><\/script>
    <script>
      const app = new Vue({
        el: '#app',
        data: {
          message: 'Hello Vue!',
        },
      });
    <\/script>
  </body>
</html>
`,paraId:5,tocIndex:2},{value:"\u5728\u9605\u8BFB vue \u6E90\u7801\u7684\u65F6\u5019\uFF0C\u7136\u540E\u5728\u5BF9\u5E94\u4F4D\u7F6E\u8FDB\u884C",paraId:6,tocIndex:2},{value:"debugger",paraId:6,tocIndex:2},{value:", \u7136\u540E\u6839\u636E\u9700\u8981\u8C03\u6574",paraId:6,tocIndex:2},{value:"helloWorld.html",paraId:6,tocIndex:2},{value:`\u6587\u4EF6\u5185\u5BB9,\u5B9E\u73B0\u8FB9\u9605\u8BFB\u8FB9\u8C03\u8BD5\u7684\u6548\u679C\uFF0C
\u907F\u514D\u76F4\u63A5\u5E72\u8BFB\uFF0C\u8BFB\u7684\u4E91\u91CC\u96FE\u91CC`,paraId:6,tocIndex:2}]},52530:function(o,e){e.Z=`import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { useStyles } from './style';

const App: React.FC = () => {
  const [leftList, setLeftList] = useState([
    { id: 1, text: 'Item 1', bg: '' },
    { id: 2, text: 'Item 2', bg: '' },
    { id: 3, text: 'Item 3', bg: '' },
    { id: 4, text: 'Item 4', bg: '' },
    { id: 5, text: 'Item 5', bg: '' },
  ]);
  const [rightList, setRightList] = useState([
    { id: 6, text: 'Item 1', bg: 'tinted' },
    { id: 7, text: 'Item 2', bg: 'tinted' },
    { id: 8, text: 'Item 3', bg: 'tinted' },
    { id: 9, text: 'Item 4', bg: 'tinted' },
    { id: 10, text: 'Item 5', bg: 'tinted' },
  ]);
  const { styles } = useStyles();
  return (
    <div className={styles.flex}>
      <ReactSortable
        group={'shared'}
        list={leftList}
        setList={setLeftList}
        animation={150}
        className={styles.halfway}
      >
        {leftList.map((item) => (
          <div
            className={\`\${styles.item} \${item.bg ? styles.tinted : ''}\`}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </ReactSortable>
      <ReactSortable
        group={'shared'}
        list={rightList}
        setList={setRightList}
        animation={150}
        className={styles.halfway}
      >
        {rightList.map((item) => (
          <div
            className={\`\${styles.item} \${item.bg ? styles.tinted : ''}\`}
            key={item.id}
          >
            {item.text}
          </div>
        ))}
      </ReactSortable>
    </div>
  );
};

export default App;
`},53591:function(o,e){e.Z=`import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    flex: css\`
      display: flex;
      justify-content: space-between;
    \`,
    halfway: css\`
      width: 49.5%;
    \`,
    item: css\`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    \`,
    tinted: css\`
      background-color: #fff6b2;
    \`,
  };
});
`},47356:function(o,e){e.Z=`import React, { useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { useStyles } from './style';

interface ItemType {
  id: number;
  name: string;
}

const App: React.FC = () => {
  const [state, setState] = useState<ItemType[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);
  const { styles } = useStyles();
  return (
    <ReactSortable
      list={state}
      setList={setState}
      animation={150}
      ghostClass={styles.ghost}
    >
      {state.map((item) => (
        <div className={styles['draggable-item']} key={item.id}>
          {item.name}
        </div>
      ))}
    </ReactSortable>
  );
};

export default App;
`},1457:function(o,e){e.Z=`import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    'draggable-item': css\`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    \`,
    ghost: css\`
      background-color: #c8ebfb;
    \`,
  };
});
`},47522:function(o,e){e.Z=`import React, { useState } from 'react';
import { GroupOptions, ReactSortable, SortableEvent } from 'react-sortablejs';
import { useStyles } from './style';

const App: React.FC = () => {
  const { styles } = useStyles();
  const [leftList, setLeftList] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
  ]);
  const [rightList, setRightList] = useState([
    { id: 6, name: 'Item 6' },
    { id: 7, name: 'Item 7' },
    { id: 8, name: 'Item 8' },
    { id: 9, name: 'Item 9' },
    { id: 10, name: 'Item 10' },
  ]);

  const renderList = (list: { id: number; name: string }[]) => {
    return list.map((item) => {
      return (
        <div key={item.id} className={styles.item} data-id={item.id}>
          {item.name}
        </div>
      );
    });
  };
  const group: GroupOptions = {
    name: 'sortable-clone',
    pull: 'clone',
  };

  const clone = (data: any, event: SortableEvent) => {
    const id = Math.floor(Math.random() * 100000);
    console.log('\u6267\u884C\u4E86\u514B\u9686', id, event);
    return {
      ...data,
      id: id,
    };
  };
  return (
    <div className={styles.flex}>
      <ReactSortable
        group={group}
        list={leftList}
        clone={clone}
        setList={setLeftList}
        animation={150}
        className={styles.halfway}
      >
        {renderList(leftList)}
      </ReactSortable>
      <ReactSortable
        group={group}
        list={rightList}
        clone={clone}
        setList={setRightList}
        animation={150}
        className={styles.halfway}
      >
        {renderList(rightList)}
      </ReactSortable>
    </div>
  );
};

export default App;
`},27298:function(o,e){e.Z=`import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    flex: css\`
      display: flex;
      justify-content: space-between;
    \`,
    halfway: css\`
      width: 49.5%;
    \`,
    item: css\`
      cursor: move;
      padding: 10px;
      margin-bottom: 10px;
      background-color: #f2f2f2;
      border-radius: 5px;
    \`,
  };
});
`}}]);
