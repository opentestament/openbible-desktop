use tauri::Manager;
use tauri_plugin_deep_link::{prepare, register};

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            #[cfg(windows)]
            {
                if cfg!(debug_assertions) {
                    prepare("myapp");
                    register("myapp", |url| {
                        println!("Deep link URL received: {}", url);
                    }).unwrap();
                }
            }

            app.listen_global("deep-link-received", |event| {
                println!("got deep link url: {:?}", event.payload());
            });
            
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}