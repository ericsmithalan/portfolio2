export class ServiceWorker {
    private static _isLocalhost: Boolean | undefined;

    public static get isLocalhost(): Boolean {
        if (!this._isLocalhost) {
            if (window && window.location && window.location.hostname) {
                if (
                    window.location.hostname === "localhost" ||
                    window.location.hostname === "[::1]" ||
                    window.location.hostname.match(
                        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
                    )
                ) {
                    this._isLocalhost = true;
                } else {
                    this._isLocalhost = false;
                }
            }
        }

        return this._isLocalhost || false;
    }

    public static register() {
        if (
            process.env.NODE_ENV === "production" &&
            "serviceWorker" in navigator
        ) {
            const publicUrl = new URL(
                process.env.PUBLIC_URL!,
                window.location.toString()
            );
            if (publicUrl.origin !== window.location.origin) {
                return;
            }

            window.addEventListener("load", () => {
                const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

                if (this.isLocalhost) {
                    this._checkValidServiceWorker(swUrl);

                    navigator.serviceWorker.ready.then(() => {
                        console.log(
                            "This web app is being served cache-first by a service " +
                                "worker. To learn more, visit https://goo.gl/SC7cgQ"
                        );
                    });
                } else {
                    this._registerValidSW(swUrl);
                }
            });
        }
    }

    public static unregister() {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.ready.then((registration) => {
                registration.unregister();
            });
        }
    }

    private static _registerValidSW(swUrl: string) {
        navigator.serviceWorker
            .register(swUrl)
            .then((registration) => {
                registration.onupdatefound = () => {
                    const installingWorker = registration.installing;
                    if (installingWorker) {
                        installingWorker.onstatechange = () => {
                            if (installingWorker.state === "installed") {
                                if (navigator.serviceWorker.controller) {
                                    console.log(
                                        "New content is available; please refresh."
                                    );
                                } else {
                                    console.log(
                                        "Content is cached for offline use."
                                    );
                                }
                            }
                        };
                    }
                };
            })
            .catch((error) => {
                console.error(
                    "Error during service worker registration:",
                    error
                );
            });
    }

    private static _checkValidServiceWorker(swUrl: string) {
        fetch(swUrl)
            .then((response) => {
                if (
                    response.status === 404 ||
                    response.headers
                        .get("content-type")!
                        .indexOf("javascript") === -1
                ) {
                    navigator.serviceWorker.ready.then((registration) => {
                        registration.unregister().then(() => {
                            window.location.reload();
                        });
                    });
                } else {
                    this._registerValidSW(swUrl);
                }
            })
            .catch(() => {
                console.log(
                    "No internet connection found. App is running in offline mode."
                );
            });
    }
}
