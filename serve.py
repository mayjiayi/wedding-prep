import http.server
import socketserver

PORT = 8181


class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    """Serve files but tell the browser never to cache them, so edits show on refresh."""

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("0.0.0.0", PORT), NoCacheHandler) as httpd:
    print(f"Serving on http://0.0.0.0:{PORT} (no-cache)")
    httpd.serve_forever()
