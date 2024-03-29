import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("myTokenName");
  // console.log(jwt);
  if (!jwt){
    console.log("NO HAY COOKIE DE LOGEO");
     return NextResponse.redirect(new URL("/login", request.url));
  }

  // this condition avoid to show the login page if the user is logged in
  // if (jwt) {
  //   if (request.nextUrl.pathname.includes("/login")) {
  //     try {
  //       await jwtVerify(jwt, new TextEncoder().encode("secret"));
  //       return NextResponse.redirect(new URL("/dashboard", request.url));
  //     } catch (error) {
  //       return NextResponse.next();
  //     }
  //   }
  // }

  try {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode("secret")
    );
    console.log({ payload });
    return NextResponse.next();
  } catch (error) {
    console.log("----------------------------------------------------------------");
    console.log(error);
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/Zonas/:path*", "/dashboard/:path*",  "/Configuraciones/:path*"],
};