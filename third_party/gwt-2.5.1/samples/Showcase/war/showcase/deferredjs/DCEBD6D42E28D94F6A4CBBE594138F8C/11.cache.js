function ayc(){}
function eyc(){}
function Vxc(a,b){a.c=b}
function Wxc(a){if(a==Lxc){return true}_F();return a==Oxc}
function Xxc(a){if(a==Kxc){return true}_F();return a==Jxc}
function cyc(a){this.c=(Tzc(),Ozc).b;this.e=($zc(),Zzc).b;this.b=a}
function Yxc(){Pxc();Vrc.call(this);this.c=(Tzc(),Ozc);this.d=($zc(),Zzc);this.f[O8c]=0;this.f[P8c]=0}
function Txc(a,b){var c;c=dlb(a.bb,97);c.c=b.b;!!c.d&&(c.d[M8c]=b.b,undefined)}
function Uxc(a,b){var c;c=dlb(a.bb,97);c.e=b.b;!!c.d&&Ioc(c.d,N8c,b.b)}
function Pxc(){Pxc=y1c;Ixc=new ayc;Lxc=new ayc;Kxc=new ayc;Jxc=new ayc;Mxc=new ayc;Nxc=new ayc;Oxc=new ayc}
function Qxc(a,b,c){var d;if(c==Ixc){if(b==a.b){return}else if(a.b){throw new ZSc('Only one CENTER widget may be added')}}rj(b);KLc(a.k,b);c==Ixc&&(a.b=b);d=new cyc(c);b.bb=d;Txc(b,a.c);Uxc(b,a.d);Sxc(a);tj(b,a)}
function Rxc(a,b){var c,d,e,f,g,i,j;iLc(a.db,$3c,b);i=new b_c;j=new VLc(a.k);while(j.b<j.c.d-1){c=TLc(j);g=dlb(c.bb,97).b;e=dlb(i.ie(g),143);d=!e?1:e.b;f=g==Mxc?'north'+d:g==Nxc?'south'+d:g==Oxc?'west'+d:g==Jxc?'east'+d:g==Lxc?'linestart'+d:g==Kxc?'lineend'+d:B8c;iLc(ur(c.db),b,f);i.ke(g,mTc(d+1))}}
function Sxc(a){var b,c,d,e,f,g,i,j,k,n,o,p,q,r,s,t;b=a.e;while(Xpc(b)>0){ar(b,Wpc(b,0))}q=1;e=1;for(i=new VLc(a.k);i.b<i.c.d-1;){d=TLc(i);f=dlb(d.bb,97).b;f==Mxc||f==Nxc?++q:(f==Jxc||f==Oxc||f==Lxc||f==Kxc)&&++e}r=Ukb(hHb,E1c,98,q,0);for(g=0;g<q;++g){r[g]=new eyc;r[g].c=$doc.createElement(K8c);zoc(b,r[g].c)}k=0;n=e-1;o=0;s=q-1;c=null;for(i=new VLc(a.k);i.b<i.c.d-1;){d=TLc(i);j=dlb(d.bb,97);t=$doc.createElement(L8c);j.d=t;j.d[M8c]=j.c;Ioc(j.d,N8c,j.e);j.d[A4c]=$3c;j.d[y4c]=$3c;if(j.b==Mxc){Boc(r[o].c,t,r[o].b);zoc(t,d.db);t[Fad]=n-k+1;++o}else if(j.b==Nxc){Boc(r[s].c,t,r[s].b);zoc(t,d.db);t[Fad]=n-k+1;--s}else if(j.b==Ixc){c=t}else if(Wxc(j.b)){p=r[o];Boc(p.c,t,p.b++);zoc(t,d.db);t[ybd]=s-o+1;++k}else if(Xxc(j.b)){p=r[o];Boc(p.c,t,p.b);zoc(t,d.db);t[ybd]=s-o+1;--n}}if(a.b){p=r[o];Boc(p.c,c,p.b);zoc(c,a.b.db)}}
uIb(805,1,s2c);_.mc=function a4b(){var a,b,c;ZKb(this.b,(a=new Yxc,a.db[z4c]='cw-DockPanel',a.f[O8c]=4,Vxc(a,(Tzc(),Nzc)),Qxc(a,new hwc('This is the first north component'),(Pxc(),Mxc)),Qxc(a,new hwc('This is the first south component'),Nxc),Qxc(a,new hwc('This is the east component'),Jxc),Qxc(a,new hwc('This is the west component'),Oxc),Qxc(a,new hwc('This is the second north component'),Mxc),Qxc(a,new hwc('This is the second south component'),Nxc),b=new hwc("This is a <code>ScrollPanel<\/code> contained at the center of a <code>DockPanel<\/code>.  By putting some fairly large contents in the middle and setting its size explicitly, it becomes a scrollable area within the page, but without requiring the use of an IFRAME.<br><br>Here's quite a bit more meaningless text that will serve primarily to make this thing scroll off the bottom of its visible area.  Otherwise, you might have to make it really, really small in order to see the nifty scroll bars!"),c=new atc(b),c.db.style[A4c]=wbd,c.db.style[y4c]=xbd,Qxc(a,c,Ixc),Rxc(a,'cwDockPanel'),a))};uIb(1105,1061,I1c,Yxc);_.Eb=function Zxc(a){Rxc(this,a)};_.Xb=function $xc(a){var b;b=Kqc(this,a);if(b){a==this.b&&(this.b=null);Sxc(this)}return b};_.b=null;var Ixc,Jxc,Kxc,Lxc,Mxc,Nxc,Oxc;uIb(1106,1,{},ayc);uIb(1107,1,{97:1},cyc);_.b=null;_.d=null;uIb(1108,1,{98:1},eyc);_.b=0;_.c=null;var BBb=JSc(B9c,'DockPanel',1105),ABb=JSc(B9c,'DockPanel$TmpRow',1108),hHb=ISc(I9c,'DockPanel$TmpRow;',1436,ABb),yBb=JSc(B9c,'DockPanel$DockLayoutConstant',1106),zBb=JSc(B9c,'DockPanel$LayoutData',1107);f3c(wn)(11);