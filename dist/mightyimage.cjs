function a(a,s,l){l&&a.set(s,l)}exports.MightyImage=function(s){var l,r,e,i,n,o,t,m,c,d,u,v,P,f,g,w,p=process.env.NEXT_PUBLIC_MIGHTY_IMAGE_ID,z=new URL(s.src);z.hostname="media.mightyimage.io",z.pathname="/image/"+p+z.pathname;var b=0;if("undefined"!=typeof window&&(b=window.innerWidth),s.sizes)if(b<=768&&s.sizes.sm){var y,I,x,_;a(z.searchParams,"w",null!=(y=null==(I=s.sizes.sm)?void 0:I.w)?y:s.width),a(z.searchParams,"h",null!=(x=null==(_=s.sizes.sm)?void 0:_.h)?x:s.height)}else if(b<=1200&&s.sizes.md){var C,M,N,k;a(z.searchParams,"w",null!=(C=null==(M=s.sizes.md)?void 0:M.w)?C:s.width),a(z.searchParams,"h",null!=(N=null==(k=s.sizes.md)?void 0:k.h)?N:s.height)}else if(s.sizes.lg){var q,E,G,L;a(z.searchParams,"w",null!=(q=null==(E=s.sizes.lg)?void 0:E.w)?q:s.width),a(z.searchParams,"h",null!=(G=null==(L=s.sizes.lg)?void 0:L.h)?G:s.height)}else a(z.searchParams,"w",s.width),a(z.searchParams,"h",s.height);else a(z.searchParams,"w",s.width),a(z.searchParams,"h",s.height);return a(z.searchParams,"bf",null==(l=s.tranformations)?void 0:l.boxfit),a(z.searchParams,"g",null==(r=s.tranformations)?void 0:r.gravity),a(z.searchParams,"ct",null==(e=s.tranformations)?void 0:e.croptop),a(z.searchParams,"cl",null==(i=s.tranformations)?void 0:i.cropleft),a(z.searchParams,"sc",null==(n=s.tranformations)?void 0:n.smartcrop),a(z.searchParams,"q",null==(o=s.tranformations)?void 0:o.quality),a(z.searchParams,"f",null==(t=s.tranformations)?void 0:t.format),a(z.searchParams,"p",null==(m=s.tranformations)?void 0:m.progressive),a(z.searchParams,"gs",null==(c=s.tranformations)?void 0:c.greyscale),a(z.searchParams,"sp",null==(d=s.tranformations)?void 0:d.sepia),a(z.searchParams,"ltxt",null==(u=s.label)?void 0:u.text),a(z.searchParams,"ll",null==(v=s.label)?void 0:v.left),a(z.searchParams,"lt",null==(P=s.label)?void 0:P.top),a(z.searchParams,"lw",null==(f=s.label)?void 0:f.width),a(z.searchParams,"lh",null==(g=s.label)?void 0:g.height),a(z.searchParams,"lc",null==(w=s.label)?void 0:w.color),h("img",{src:z.href,alt:s.alt,width:s.width,height:s.height,className:s.className,onClick:s.onClick,loading:s.loading})};
//# sourceMappingURL=mightyimage.cjs.map
