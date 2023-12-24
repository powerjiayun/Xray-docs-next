import{c as n,p as t}from"./constant.f07fca73.js";import{aH as a,aI as c,aD as r,aJ as e,aK as o,aL as u,aM as i,aN as y,aO as l,aP as f,aQ as s,aR as p,aS as x}from"./mermaid.core.a9cbcc4a.js";function h(n){return n.innerRadius}function v(n){return n.outerRadius}function g(n){return n.startAngle}function d(n){return n.endAngle}function m(n){return n&&n.padAngle}function T(n,t,a,r,e,o,u,i){var y=a-n,l=r-t,f=u-e,s=i-o,p=s*y-f*l;if(!(p*p<c))return[n+(p=(f*(t-o)-s*(n-e))/p)*y,t+p*l]}function R(n,t,a,c,r,e,o){var u=n-a,i=t-c,y=(o?e:-e)/l(u*u+i*i),f=y*i,p=-y*u,x=n+f,h=t+p,v=a+f,g=c+p,d=(x+v)/2,m=(h+g)/2,T=v-x,R=g-h,A=T*T+R*R,j=r-e,P=x*g-v*h,b=(R<0?-1:1)*l(s(0,j*j*A-P*P)),D=(P*R-T*b)/A,H=(-P*T-R*b)/A,I=(P*R+T*b)/A,J=(-P*T+R*b)/A,K=D-d,L=H-m,M=I-d,N=J-m;return K*K+L*L>M*M+N*N&&(D=I,H=J),{cx:D,cy:H,x01:-f,y01:-p,x11:D*(r/j-1),y11:H*(r/j-1)}}function A(){var s=h,A=v,j=n(0),P=null,b=g,D=d,H=m,I=null;function J(){var n,h,v=+s.apply(this,arguments),g=+A.apply(this,arguments),d=b.apply(this,arguments)-a,m=D.apply(this,arguments)-a,J=i(m-d),K=m>d;if(I||(I=n=t()),g<v&&(h=g,g=v,v=h),g>c)if(J>r-c)I.moveTo(g*e(d),g*o(d)),I.arc(0,0,g,d,m,!K),v>c&&(I.moveTo(v*e(m),v*o(m)),I.arc(0,0,v,m,d,K));else{var L,M,N=d,O=m,Q=d,S=m,k=J,q=J,w=H.apply(this,arguments)/2,z=w>c&&(P?+P.apply(this,arguments):l(v*v+g*g)),B=u(i(g-v)/2,+j.apply(this,arguments)),C=B,E=B;if(z>c){var F=p(z/v*o(w)),G=p(z/g*o(w));(k-=2*F)>c?(Q+=F*=K?1:-1,S-=F):(k=0,Q=S=(d+m)/2),(q-=2*G)>c?(N+=G*=K?1:-1,O-=G):(q=0,N=O=(d+m)/2)}var U=g*e(N),V=g*o(N),W=v*e(S),X=v*o(S);if(B>c){var Y,Z=g*e(O),$=g*o(O),_=v*e(Q),nn=v*o(Q);if(J<y&&(Y=T(U,V,_,nn,Z,$,W,X))){var tn=U-Y[0],an=V-Y[1],cn=Z-Y[0],rn=$-Y[1],en=1/o(x((tn*cn+an*rn)/(l(tn*tn+an*an)*l(cn*cn+rn*rn)))/2),on=l(Y[0]*Y[0]+Y[1]*Y[1]);C=u(B,(v-on)/(en-1)),E=u(B,(g-on)/(en+1))}}q>c?E>c?(L=R(_,nn,U,V,g,E,K),M=R(Z,$,W,X,g,E,K),I.moveTo(L.cx+L.x01,L.cy+L.y01),E<B?I.arc(L.cx,L.cy,E,f(L.y01,L.x01),f(M.y01,M.x01),!K):(I.arc(L.cx,L.cy,E,f(L.y01,L.x01),f(L.y11,L.x11),!K),I.arc(0,0,g,f(L.cy+L.y11,L.cx+L.x11),f(M.cy+M.y11,M.cx+M.x11),!K),I.arc(M.cx,M.cy,E,f(M.y11,M.x11),f(M.y01,M.x01),!K))):(I.moveTo(U,V),I.arc(0,0,g,N,O,!K)):I.moveTo(U,V),v>c&&k>c?C>c?(L=R(W,X,Z,$,v,-C,K),M=R(U,V,_,nn,v,-C,K),I.lineTo(L.cx+L.x01,L.cy+L.y01),C<B?I.arc(L.cx,L.cy,C,f(L.y01,L.x01),f(M.y01,M.x01),!K):(I.arc(L.cx,L.cy,C,f(L.y01,L.x01),f(L.y11,L.x11),!K),I.arc(0,0,v,f(L.cy+L.y11,L.cx+L.x11),f(M.cy+M.y11,M.cx+M.x11),K),I.arc(M.cx,M.cy,C,f(M.y11,M.x11),f(M.y01,M.x01),!K))):I.arc(0,0,v,S,Q,K):I.lineTo(W,X)}else I.moveTo(0,0);if(I.closePath(),n)return I=null,n+""||null}return J.centroid=function(){var n=(+s.apply(this,arguments)+ +A.apply(this,arguments))/2,t=(+b.apply(this,arguments)+ +D.apply(this,arguments))/2-y/2;return[e(t)*n,o(t)*n]},J.innerRadius=function(t){return arguments.length?(s="function"==typeof t?t:n(+t),J):s},J.outerRadius=function(t){return arguments.length?(A="function"==typeof t?t:n(+t),J):A},J.cornerRadius=function(t){return arguments.length?(j="function"==typeof t?t:n(+t),J):j},J.padRadius=function(t){return arguments.length?(P=null==t?null:"function"==typeof t?t:n(+t),J):P},J.startAngle=function(t){return arguments.length?(b="function"==typeof t?t:n(+t),J):b},J.endAngle=function(t){return arguments.length?(D="function"==typeof t?t:n(+t),J):D},J.padAngle=function(t){return arguments.length?(H="function"==typeof t?t:n(+t),J):H},J.context=function(n){return arguments.length?(I=null==n?null:n,J):I},J}export{A as a};
