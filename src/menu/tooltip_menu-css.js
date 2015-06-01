import insertCSS from "insert-css"

insertCSS(`

.ProseMirror-tooltip-menu {
  padding: 0;
  margin: 0 -4px;
  display: block;
  line-height: 1;
  white-space: pre;
  width: -webkit-fit-content;
  width: fit-content;
}

.ProseMirror-tooltip-menu li {
  display: inline-block;
  padding: 2px 7px;
  margin: 0 2px;
  cursor: pointer;
}

.ProseMirror-tooltip-menu-active {
  background: #666;
  border-radius: 4px;
}

`)