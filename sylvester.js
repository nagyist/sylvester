eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('9 1m={1l:1e-6};8 q(){4.e=8(i){7(i<1||i>4.K())?h:4.p[i-1]};4.K=8(){7 4.p.1d};4.19=8(){7 F.2R(4.J(4))};4.1F=8(B){g(4.K()!=B.K()){7 1t}G(9 i=1;i<=4.K();i++){g(F.18(4.e(i)-B.e(i))>1m.1l){7 1t}}7 1N};4.1b=8(){7 q.l(4.p)};4.14=8(1V){9 p=[];G(9 i=1;i<=4.K();i++){p.1o(1V(4.e(i),i))}7 q.l(p)};4.1I=8(){9 r=4.19();4.1C(4.14(8(x){7 x/r}).p);7 4};4.1s=8(){7 4.1b().1I()};4.1A=8(B){9 J=4.J(B);g(J===h||4.19()===0||B.19()===0){7 h}9 1z=4.J(B)/(4.19()*B.19());g(1z<-1){1z=-1}g(1z>1){1z=1}7 F.2K(1z)};4.17=8(B){9 1E=4.1A(B);7(1E===h)?h:(1E<=1m.1l)};4.2b=8(B){9 1E=4.1A(B);7(1E===h)?h:(F.18(1E-F.29)<=1m.1l)};4.2c=8(B){9 J=4.J(B);7(J===h)?h:(F.18(J)<=1m.1l)};4.W=8(B){g(4.K()!=B.K()){7 h}7 4.14(8(x,i){7 x+B.e(i)})};4.O=8(B){7 4.W(B.x(-1))};4.1W=8(k){7 4.14(8(x){7 x*k})};4.x=8(k){7 4.1W(k)};4.J=8(B){9 i,2a=0;g(4.K()!=B.K()){7 h}G(i=1;i<=4.K();i++){2a+=4.e(i)*B.e(i)}7 2a};4.1n=8(B){g(4.K()!=3||B.K()!=3){7 h}7 q.l([(4.e(2)*B.e(3))-(4.e(3)*B.e(2)),(4.e(3)*B.e(1))-(4.e(1)*B.e(3)),(4.e(1)*B.e(2))-(4.e(2)*B.e(1))])};4.1X=8(){9 m=0;G(9 i=1;i<=4.K();i++){g(F.18(4.e(i))>F.18(m)){m=4.e(i)}}7 m};4.2z=8(x){9 1r=h,i;G(i=1;i<=4.K();i++){g(1r===h&&4.e(i)==x){1r=i}}7 1r};4.2L=8(){7 u.2j(4.p)};4.20=8(){7 4.14(8(x){7 F.20(x)})};4.1R=8(x){4.1C(4.14(8(y){7(F.18(y-x)<=1m.1l)?x:y}).p);7 4};4.1a=8(f){g(f.o){7 f.1a(4)}g(f.K()!=4.K()){7 h}7 4.O(f).19()};4.2M=8(1c){7 1c.1f(4)};4.2s=8(1x){7 1x.1f(4)};4.1K=8(t,f){2u(4.K()){1T 2:g(!f.K()==2){7 h}7 f.W(u.1H(t).x(4.O(f)));1U;1T 3:g(!f.v){7 h}9 C=f.1y(4);9 R=u.1H(t,f.v);7 C.W(R.x(4.O(C)));1U;2v:7 h}};4.1h=8(f){g(f.o){9 P=4.12();g(P===h){7 h}9 C=f.1y(P);7 C.W(C.O(P))}13{g(4.K()!=f.K()){7 h}7 f.W(f.O(4))}};4.12=8(){9 V=4.1b();2u(V.K()){1T 3:7 V;1U;1T 2:7 q.l([V.e(1),V.e(2),0]);1U;2v:7 h}};4.2g=8(){7\'[\'+4.p.2F(\', \')+\']\'};4.1C=8(w){g(w==1u){7 h}4.p=[];g(w.p){w=w.p}G(9 i=0;i<w.1d;i++){g(!2h(w[i])){4.p.1o(w[i])}}g(4.p.1d===0){7 h}7 4}}q.l=8(p){9 V=1P q();7 V.1C(p)};q.i=q.l([1,0,0]);q.j=q.l([0,1,0]);q.k=q.l([0,0,1]);q.2p=8(n){7 q.15(n).14(8(){7 F.2q()})};q.15=8(n){9 p=[];G(9 i=0;i<n;i++){p.1o(0)}7 q.l(p)};8 u(){4.e=8(i,j){g(i<1||i>4.H()||j<1||j>4.10()){7 h}7 4.p[i-1][j-1]};4.U=8(k){g(k>4.H()){7 h}7 q.l(4.p[k-1])};4.1D=8(k){g(k>4.10()){7 h}9 1D=[];G(9 i=1;i<=4.H();i++){1D.1o(4.e(i,k))}7 q.l(1D)};4.K=8(){7{H:4.H(),10:4.10()}};4.H=8(){7 4.p.1d};4.10=8(){7 4.p[0].1d};4.1F=8(z){z=u.l(z);g(4.H()!=z.H()||4.10()!=z.10()){7 1t}9 i,j;G(i=1;i<=4.H();i++){g(!4.U(i).1F(z.U(i))){7 1t}}7 1N};4.1b=8(){7 u.l(4.p)};4.14=8(1V){9 w=[],i,j;G(i=1;i<=4.H();i++){w[i-1]=[];G(j=1;j<=4.10();j++){w[i-1][j-1]=1V(4.e(i,j),i,j)}}7 u.l(w)};4.2t=8(z){z=u.l(z);7(4.H()==z.H()&&4.10()==z.10())};4.W=8(z){z=u.l(z);g(!4.2t(z)){7 h}7 4.14(8(x,i,j){7 x+z.e(i,j)})};4.O=8(z){7 4.W(z.x(-1))};4.2x=8(z){9 2w=u.l(z);7(4.10()==2w.H())};4.1W=8(z){9 i,j;g(z.p){9 2y=z.19?1N:1t;z=u.l(z);g(!4.2x(z)){7 h}9 16=4;9 M=u.15(4.H(),z.10()).14(8(x,i,j){7 16.U(i).J(z.1D(j))});7 2y?M.1D(1):M}13{7 4.14(8(x){7 x*z})}};4.x=8(z){7 4.1W(z)};4.2C=8(a,b,c,d){9 16=4;7 u.15(c,d).14(8(x,i,j){7 16.e((i+a-2)%16.H()+1,(j+b-2)%16.10()+1)})};4.2N=8(){9 16=4;7 u.15(4.10(),4.H()).14(8(x,i,j){7 16.e(j,i)})};4.1w=8(){7(4.H()==4.10())};4.1X=8(){9 m=0;G(9 i=1;i<=4.H();i++){g(F.18(4.U(i).1X())>F.18(m)){m=4.U(i).1X()}}7 m};4.2z=8(x){9 1r=h,i,j;G(i=1;i<=4.H();i++){G(j=1;j<=4.10();j++){g(1r===h&&4.e(i,j)==x){1r={i:i,j:j}}}}7 1r};4.2e=8(){g(!4.1w){7 h}9 w=[];G(9 i=1;i<=4.H();i++){w.1o(4.e(i,i))}7 q.l(w)};4.1B=8(){9 i,j,M=4.1b(),1Y;G(i=1;i<M.H();i++){g(M.e(i,i)==0){1Y=1t;G(j=i+1;j<=M.H();j++){g(M.e(j,i)!=0&&!1Y){1Y=1N;M.p[i-1]=M.U(i).W(M.U(j)).p}}}g(M.e(i,i)!=0){G(j=i+1;j<=M.H();j++){M.p[j-1]=M.U(j).O(M.U(i).x(M.e(j,i)/M.e(i,i))).p}}}7 M.1R(0)};4.2O=8(){7 4.1B()};4.2d=8(){g(!4.1w()){7 h}9 w=4.1B().2e().p;9 1L=w[0];G(9 i=1;i<w.1d;i++){1L=1L*w[i]}7 1L};4.1L=8(){7 4.2d()};4.2f=8(){7(4.1w()&&4.2d()===0)};4.2A=8(){g(!4.1w()){7 h}9 w=4.1B().2e().p;9 1G=w[0];G(9 i=1;i<w.1d;i++){1G=1G+w[i]}7 1G};4.1G=8(){7 4.2A()};4.1Z=8(){g(!4.1w()){7 h}9 M=4.1B(),1Z=4.H();G(9 i=4.H();i>=1;i--){g(M.U(i).19()===0){1Z--}}7 1Z};4.2B=8(z){z=u.l(z);9 16=4.1b();9 i,j;g(16.H()!=z.H()){7 h}G(i=0;i<16.H();i++){G(j=0;j<z.10();j++){16.p[i][16.H()+j]=z.e(i+1,j+1)}}7 16};4.2D=8(){9 i,j;g(!4.1w()||4.2f()){7 h}9 n=4.H();9 M=4.2B(u.I(n)).1B();G(i=1;i<=n;i++){M.p[i-1]=M.U(i).x(1/M.e(i,i)).p}G(i=n;i>1;i--){G(j=1;j<i;j++){M.p[j-1]=M.U(j).O(M.U(i).x(M.e(j,i))).p}}7 M.2C(1,n+1,n,n)};4.2E=8(){7 4.2D()};4.20=8(){7 4.14(8(x){7 F.20(x)})};4.1R=8(x){G(9 i=1;i<=4.H();i++){4.p[i-1]=4.U(i).1R(x).p}7 4};4.2g=8(){9 z=4.1b();G(9 i=0;i<z.H();i++){z.p[i]=q.l(z.p[i]).2g()}7 z.p.2F(\'\\n\')};4.1C=8(w){9 U,i,j,22=1N;g(w==1u){7 h}4.p=[];g(w.p){w=w.p}G(i=0;i<w.1d;i++){g(w[i][0]!==1u){U=[];G(j=0;j<w[i].1d;j++){g(!2h(w[i][j])){U.1o(w[i][j])}}g(i>0&&4.p[i-1].1d!=U.1d){22=1t}13{4.p.1o(U)}}13{g(!2h(w[i])){4.p.1o([w[i]])}}}g(!22){4.p=[];7 h}13{7 4}}}u.l=8(p){9 M=1P u();7 M.1C(p)};u.I=8(n){9 w=[],i,j;G(i=0;i<n;i++){w[i]=[];G(j=0;j<n;j++){w[i][j]=(i==j)?1:0}}7 u.l(w)};u.2j=8(p){g(p==1u){7 h}9 V=q.l(p);9 n=V.K();g(n<=0){7 h}9 M=u.I(n);G(9 i=0;i<n;i++){M.p[i][i]=V.p[i]}7 M};u.1H=8(t,a){g(!a){7 u.l([[F.1q(t),-F.1j(t)],[F.1j(t),F.1q(t)]])}1g=a.1b();g(1g.K()!=3){7 h}1g.1I();9 25=u.1J(t);g(1g.17(q.k)){7 25}9 21=q.l([1g.e(1),1g.e(2),0]);9 26=u.I(3),24=u.I(3);g(!21.17(q.i)){9 2k=21.1n(q.i).1I();9 1O=2k.e(3)*21.1A(q.i);1g=u.1J(1O).x(1g);26=u.1J(1O);24=u.1J(-1O)}9 2l=1g.1n(q.k).1I();9 23=2l.e(2)*1g.1A(q.k);9 2o=u.27(23);9 2n=u.27(-23);7 24.x(2n).x(25).x(2o).x(26)};u.2I=8(t){7 u.l([[1,0,0],[0,F.1q(t),-F.1j(t)],[0,F.1j(t),F.1q(t)]])};u.27=8(t){7 u.l([[F.1q(t),0,F.1j(t)],[0,1,0],[-F.1j(t),0,F.1q(t)]])};u.1J=8(t){7 u.l([[F.1q(t),-F.1j(t),0],[F.1j(t),F.1q(t),0],[0,0,1]])};u.2p=8(n,m){7 u.15(n,m).14(8(){7 F.2q()})};u.15=8(n,m){9 w=[],i,j;G(i=0;i<n;i++){w[i]=[];G(j=0;j<m;j++){w[i][j]=0}}7 u.l(w)};8 11(){4.1F=8(1c){7(4.17(1c)&&4.1f(1c.o))};4.1b=8(){7 11.l(4.o,4.v)};4.1S=8(B){B=q.l(B).12();g(B===h){7 h}7 11.l(4.o.W(B),4.v)};4.17=8(f){g(f.E){7 f.17(4)}7(4.v.17(f.v)||4.v.2b(f.v))};4.1a=8(f){g(f.E){7 f.1a(4)}g(f.v){g(4.17(f)){7 4.1a(f.o)}9 N=4.v.1n(f.v).1s();7 F.18(4.o.O(f.o).J(N))}13{9 P=f.12();g(P===h){7 h}9 A=P.O(4.o);7 F.18(A.19()*F.1j(A.1A(4.v)))}};4.1f=8(1p){9 28=4.1a(1p);7(28!==h&&28<=1m.1l)};4.2s=8(1x){7 1x.1f(4)};4.1v=8(f){g(f.E){7 f.1v(4)}7(!4.17(f)&&4.1a(f)<=1m.1l)};4.1M=8(f){g(!4.1v(f)){7 h}g(f.E){7 f.1M(4)}9 P=4.o,X=4.v,Q=f.o,Y=f.v;9 a=(X.J(Q.O(P))*Y.J(Y)/X.J(X))+(X.J(Y)*Y.J(P.O(Q)));9 s=a/(Y.J(Y)-(X.J(Y)*X.J(Y)));7 P.W(X.x(s))};4.1y=8(f){g(f.v){g(4.1v(f)){7 4.1M(f)}g(4.17(f)){7 h}9 S=4.v.1n(f.v).1s().x(4.1a(f));9 L=f.1b().1S(S);g(L.1a(4)>f.1a(4)){L=f.1b().1S(S.x(-1))}7 4.1M(L)}13{9 P=f.12();g(P===h){7 h}g(4.1f(P)){7 P}9 A=P.O(4.o);7 P.W(4.v.1n(4.v.1n(A)).1s().x(4.1a(P)))}};4.1K=8(t,1c){9 R=u.1H(t,1c.v);9 C=1c.1y(4.o);7 11.l(C.W(R.x(4.o.O(C))),R.x(4.v))};4.1h=8(f){g(f.E){9 A=4.o.1h(f);9 D=f.o.W(4.v).1h(f).O(f.o);7 11.l(A,D)}13 g(f.v){7 4.1K(F.29,f)}13{9 P=f.12();g(P===h){7 h}7 11.l(4.o.1h(P),4.v)}};4.1Q=8(o,v){o=q.l(o).12();v=q.l(v).12();g(o===h||v===h||v.19()===0){7 h}4.o=o;4.v=v.1s();7 4}}11.l=8(o,v){9 L=1P 11();7 L.1Q(o,v)};11.X=11.l(q.15(3),q.i);11.Y=11.l(q.15(3),q.j);11.Z=11.l(q.15(3),q.k);8 T(){4.1F=8(1x){7(4.1f(1x.o)&&4.17(1x))};4.1b=8(){7 T.l(4.o,4.E)};4.1S=8(B){B=q.l(B).12();g(B===h){7 h}7 T.l(4.o.W(B),4.E)};4.17=8(f){g(f.E){7(4.E.17(f.E)||4.E.2b(f.E))}13 g(f.v){7 4.E.2c(f.v)}7 h};4.1a=8(f){g(4.1v(f)||4.1f(f)){7 0}g(f.o){7 F.18(4.o.O(f.o).J(4.E))}13{9 P=f.12();g(P===h){7 h}7 F.18(4.o.O(P).J(4.E))}};4.1f=8(f){g(f.v){7(4.1f(f.o)&&4.E.2c(f.v))}13{9 P=f.12();g(P===h){7 h}7(F.18(4.E.J(4.o)-4.E.J(P))<=1m.1l)}};4.1v=8(f){g(f.v==1u&&f.E==1u){7 h}7!4.17(f)};4.1M=8(f){g(!4.1v(f)){7 h}g(f.v){9 A=f.o,D=f.v,P=4.o,N=4.E;7 A.W(D.x(N.J(P.O(A))/N.J(D)))}13 g(f.E){9 v=4.E.1n(f.E).1s();9 N=u.15(2,2),i=0;2P(N.2f()){i++;N=u.l([[4.E.e(i%3+1),4.E.e((i+1)%3+1)],[f.E.e(i%3+1),f.E.e((i+1)%3+1)]])}9 2i=N.2E().x(q.l([4.E.J(4.o),f.E.J(f.o)]));9 o=[];G(9 j=1;j<=3;j++){o.1o((i==j)?0:2i.e((j+(5-i)%3)%3+1))}7 11.l(o,v)}};4.1y=8(1p){1p=1p.12();g(1p===h){7 h}7 1p.W(4.E.x(4.o.O(1p).J(4.E)))};4.1K=8(t,1c){9 R=u.1H(t,1c.v);9 C=1c.1y(4.o);7 T.l(C.W(R.x(4.o.O(C))),R.x(4.E))};4.1h=8(f){g(f.E){9 A=4.o.1h(f);9 N=f.o.W(4.E).1h(f).O(f.o);7 T.l(A,N)}13 g(f.v){7 4.1K(F.29,1c)}13{9 P=f.12();g(P===h){7 h}7 T.l(4.o.1h(P),4.E)}};4.1Q=8(o,1i,1k){o=q.l(o).12();1i=q.l(1i).12();1k=(1k==1u)?h:q.l(1k).12();g(o===h||1i===h||1i.19()===0){7 h}g(1k!==h){g(1k.19()===0){7 h}E=(1i.O(o)).1n(1k.O(o)).1s()}13{E=1i.1s()}4.o=o;4.E=E;7 4}}T.l=8(o,1i,1k){9 P=1P T();7 P.1Q(o,1i,1k)};T.2G=T.l(q.15(3),q.k);T.2m=T.l(q.15(3),q.i);T.2r=T.l(q.15(3),q.j);T.2Q=T.2G;T.2H=T.2m;T.2J=T.2r;9 $V=q.l;9 $M=u.l;9 $L=11.l;9 $P=T.l;',62,178,'||||this|||return|function|var||||||obj|if|null||||create|||anchor|elements|Vector||||Matrix|direction|els|||matrix||vector|||normal|Math|for|rows||dot|dimensions||||subtract|||||Plane|row||add||||cols|Line|to3D|else|map|Zero|self|isParallelTo|abs|modulus|distanceFrom|dup|line|length||contains|axis|reflectionIn|v1|sin|v2|precision|Sylvester|cross|push|point|cos|index|toUnitVector|false|undefined|intersects|isSquare|plane|pointClosestTo|theta|angleFrom|toRightTriangular|setElements|col|angle|eql|tr|Rotation|normalize|RotationZ|rotate|det|intersectionWith|true|Zt|new|setVectors|snapTo|translate|case|break|fn|multiply|max|nonzero|rank|round|projectionOnXY|success|Yt|inv_z_rot|rot|z_rot|RotationY|dist|PI|product|isAntiparallelTo|isPerpendicularTo|determinant|diagonal|isSingular|inspect|isNaN|intersection|Diagonal|Za|Ya|YZ|inv_y_rot|y_rot|Random|random|ZX|liesIn|isSameSizeAs|switch|default|mat|canMultiplyFromLeft|returnVector|indexOf|trace|augment|minor|inverse|inv|join|XY|ZY|RotationX|XZ|acos|toDiagonalMatrix|liesOn|transpose|toUpperTriangular|while|YX|sqrt'.split('|'),0,{}))