(function() {var implementors = {};
implementors["void"] = [];implementors["bytes"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.RingBuf.html' title='bytes::RingBuf'>RingBuf</a>","impl&lt;T:&nbsp;<a class='trait' href='bytes/buf/trait.Buf.html' title='bytes::buf::Buf'>Buf</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.Take.html' title='bytes::Take'>Take</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.ByteBuf.html' title='bytes::ByteBuf'>ByteBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.ROByteBuf.html' title='bytes::ROByteBuf'>ROByteBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='bytes/struct.RopeBuf.html' title='bytes::RopeBuf'>RopeBuf</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/alloc/boxed/struct.Box.html' title='alloc::boxed::Box'>Box</a>&lt;<a class='trait' href='bytes/buf/trait.Buf.html' title='bytes::buf::Buf'>Buf</a> + 'static&gt;",];implementors["mio"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/tcp/struct.TcpStream.html' title='mio::tcp::TcpStream'>TcpStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/unix/struct.UnixStream.html' title='mio::unix::UnixStream'>UnixStream</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/unix/struct.PipeReader.html' title='mio::unix::PipeReader'>PipeReader</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for &amp;'a <a class='struct' href='mio/unix/struct.PipeReader.html' title='mio::unix::PipeReader'>PipeReader</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='mio/struct.Io.html' title='mio::Io'>Io</a>","impl&lt;'a&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for &amp;'a <a class='struct' href='mio/struct.Io.html' title='mio::Io'>Io</a>",];implementors["spidev"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='spidev/struct.Spidev.html' title='spidev::Spidev'>Spidev</a>",];implementors["cupi"] = ["impl <a class='trait' href='https://doc.rust-lang.org/nightly/std/io/trait.Read.html' title='std::io::Read'>Read</a> for <a class='struct' href='cupi/sys/struct.Selector.html' title='cupi::sys::Selector'>Selector</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
