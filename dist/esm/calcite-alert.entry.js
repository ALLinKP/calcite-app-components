import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './chunk-f176fce8.js';
import { d as checkCircle24F, f as exclamationMarkTriangle24F, l as lightbulb24F, x as x32 } from './chunk-8490c02a.js';
import { A as AlertInterface } from './chunk-595a268e.js';

/** Alerts are not meant to be used inline with content, or be present in view on page load.
 * As such, calcite-alert relies on calcite-alerts for positioning - displaying an alert on its own
 * will lead to unexpected and potentially undesireable results
 */
/**
 * @slot alert-title - Title of the alert (optional)
 * @slot alert-message - Main text of the alert
 * @slot alert-link - Optional action to take from the alert (undo, try again, etc.)
 */
class CalciteAlert {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Is the alert currently active or not
         */
        this.active = false;
        /**
         * Close the alert automatically (recommended for passive, non-blocking alerts)
         */
        this.dismiss = false;
        /**
         * Length before autodismissal (only used with `dismiss`)
         */
        this.duration = this.dismiss
            ? "medium"
            : null;
        /**
         * Color for the alert (will apply to top border and icon)
         */
        this.color = "blue";
        /**
         * Select theme (light or dark)
         */
        this.theme = "light";
        /**
         * If false, no icon will be shown in the alert
         */
        this.icon = false;
        /**
         * Unique ID for this alert
         */
        this.id = "1";
        /**
         * @internal
         */
        this.currentAlert = "";
        /**
         * @internal
         */
        this.queueLength = 0;
        this.durationDefaults = {
            slow: 14000,
            medium: 10000,
            fast: 6000
        };
        this.iconDefaults = {
            green: checkCircle24F,
            yellow: exclamationMarkTriangle24F,
            red: exclamationMarkTriangle24F,
            blue: lightbulb24F
        };
        this.calciteAlertClose = createEvent(this, "calciteAlertClose", 7);
        this.calciteAlertOpen = createEvent(this, "calciteAlertOpen", 7);
    }
    /**
     * watch for changes to currentAlert passed from <calcite-alerts>
     */
    watchCurrentAlert() {
        this.active = this.currentAlert === this.id;
        if (this.active)
            this.openCalciteAlert();
        if (this.active && this.dismiss)
            setTimeout(() => this.closeCalciteAlert(), this.durationDefaults[this.duration]);
    }
    /**
     * emit the `calciteAlerClose` event - <calcite-alerts> listens for this, if the alert is not active, but is the queue, this will remove it from the queue
     */
    async closeCalciteAlert() {
        this.calciteAlertClose.emit(this.id);
    }
    /**
     * emit the `calciteAlertOpen` event - <calcite-alerts> listens for this, and determines if it should open the alert or add it to the queue
     */
    async openCalciteAlert() {
        this.calciteAlertOpen.emit(this.id);
    }
    connectedCallback() {
        // prop validations
        let colors = ["blue", "red", "green", "yellow"];
        if (!colors.includes(this.color))
            this.color = "blue";
        let durations = ["slow", "medium", "fast"];
        if (this.duration !== null && !durations.includes(this.duration))
            this.duration = "medium";
        let themes = ["dark", "light"];
        if (!themes.includes(this.theme))
            this.theme = "light";
    }
    setIcon() {
        var path = this.iconDefaults[this.color];
        return (h("div", { class: "alert-icon" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24", width: "24", viewBox: "0 0 24 24" }, h("path", { d: path }))));
    }
    render() {
        const closeButton = (h("button", { class: "alert-close", "aria-label": "close", onClick: () => this.closeCalciteAlert() }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "32", width: "32", viewBox: "0 0 32 32" }, h("path", { d: x32 }))));
        const close = !this.dismiss ? closeButton : "";
        const icon = this.icon ? this.setIcon() : "";
        const count = (h("div", { class: `${this.queueLength > 0 ? "active " : ""}alert-count` }, "+", this.queueLength > 0 ? this.queueLength : 1));
        const progress = this.active && this.dismiss ? h("div", { class: "alert-dismiss" }) : "";
        return (h(Host, { theme: this.theme, active: !!this.active, duration: this.duration }, icon, h("div", { class: "alert-content" }, h("slot", { name: "alert-title" }), h("slot", { name: "alert-message" }), h("slot", { name: "alert-link" })), count, close, progress));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "currentAlert": ["watchCurrentAlert"]
    }; }
    static get style() { return "body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}calcite-tabs{display:block}:host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;pointer-events:none;z-index:102;margin:0 auto;width:50em;max-width:90%;max-height:0;background-color:#fff;-webkit-box-shadow:0 0 16px 0 rgba(0,0,0,.15);box-shadow:0 0 16px 0 rgba(0,0,0,.15);border-radius:2px;opacity:0;-webkit-transform:translate3d(0,1.5rem,0);transform:translate3d(0,1.5rem,0);-webkit-transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;transition:.3s cubic-bezier(.215,.44,.42,.88),opacity .3s cubic-bezier(.215,.44,.42,.88),all .15s ease-in-out;-webkit-border-before:0 solid transparent;border-block-start:0 solid transparent}\@media only screen and (max-width:860px){:host{max-width:100%;border-radius:2px 2px 0 0;-webkit-box-shadow:0 -8px 16px 0 rgba(0,0,0,.15);box-shadow:0 -8px 16px 0 rgba(0,0,0,.15)}}:host:host([active]){visibility:visible;opacity:1;max-height:100%;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transform:translate3d(0,-1.5rem,0);transform:translate3d(0,-1.5rem,0);pointer-events:auto;border-block-start-width:3px}\@media only screen and (max-width:860px){:host:host([active]){-webkit-transform:translateZ(0);transform:translateZ(0)}}:host slot[name=alert-title]::slotted(div){font-size:1rem;line-height:1.5;font-weight:500}:host slot[name=alert-link]::slotted(a){font-size:.9375rem;line-height:1.5;color:#007ac2;margin-left:.75rem}:host slot[name=alert-message]::slotted(div){font-size:.9375rem;line-height:1.5;color:#555;display:inline}.alert-content{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;-ms-flex:1 1 auto;flex:1 1 auto;min-width:0;word-wrap:break-word;-webkit-padding-before:.75rem;padding-block-start:.75rem;-webkit-padding-after:.75rem;padding-block-end:.75rem;-webkit-padding-end:.75rem;padding-inline-end:.75rem;-webkit-padding-start:0;padding-inline-start:0}.alert-content svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-content{padding:1.5rem}}.alert-content:first-of-type{-webkit-padding-start:1.5rem;padding-inline-start:1.5rem}\@media only screen and (max-width:860px){.alert-content{-webkit-padding-before:1.5rem;padding-block-start:1.5rem;-webkit-padding-after:1.5rem;padding-block-end:1.5rem;-webkit-padding-end:.75rem;padding-inline-end:.75rem;-webkit-padding-start:0;padding-inline-start:0}}.alert-icon{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.alert-icon svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-icon{padding:1.5rem}}.alert-close{padding:.75rem 1.5rem;-ms-flex:0 0 auto;flex:0 0 auto;-webkit-transition-delay:.3s;transition-delay:.3s;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out;background-color:transparent;-webkit-appearance:none;border:none;outline:none;cursor:pointer;border-radius:0 0 2px 0}.alert-close svg{height:16px;width:16px;vertical-align:top}\@media only screen and (max-width:860px){.alert-close{padding:1.5rem}}.alert-close svg{fill:#151515}.alert-close:focus,.alert-close:hover{background-color:#f3f3f3}.alert-close:active{background-color:#eaeaea}.alert-close:last-child{border-radius:0 0 2px 0}\@media only screen and (max-width:860px){.alert-close{border-radius:0}}.alert-count{font-size:.875rem;line-height:1.5;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly;overflow:hidden;width:0;visibility:hidden;font-weight:500;text-align:center;color:#404040;opacity:0;-webkit-border-start:0 solid transparent;border-inline-start:0 solid transparent;-webkit-border-end:0 solid transparent;border-inline-end:0 solid transparent;cursor:default;-webkit-transition:all .15s ease-in-out;transition:all .15s ease-in-out}.alert-count.active{visibility:visible;-webkit-transition-delay:.3s;transition-delay:.3s;opacity:1;padding:0 .375rem;width:3rem;-webkit-border-start:1px solid #f3f3f3;border-inline-start:1px solid #f3f3f3;-webkit-border-end:1px solid #f3f3f3;border-inline-end:1px solid #f3f3f3}.alert-count.active:last-child{-webkit-border-end:0 solid transparent;border-inline-end:0 solid transparent}\@media only screen and (max-width:860px){.alert-count{border-radius:0}}.alert-dismiss{left:0;top:0;width:100%;z-index:103}.alert-dismiss,.alert-dismiss:after{display:block;position:absolute;right:0;height:3px}.alert-dismiss:after{top:-3px;border-radius:2px 2px 0 0;content:\"\";background-color:hsla(0,0%,100%,.6);-webkit-transition:all .3s linear;transition:all .3s linear;z-index:104}:host([theme=dark]){background-color:#2b2b2b}:host([theme=dark]) slot[name=alert-title]::slotted(div){color:#f8f8f8}:host([theme=dark]) slot[name=alert-message]::slotted(div){color:#f3f3f3}:host([theme=dark]) .alert-close svg{fill:#d4d4d4}:host([theme=dark]) .alert-close:focus,:host([theme=dark]) .alert-close:hover{background-color:#202020}:host([theme=dark]) .alert-close:active{background-color:#151515}:host([theme=dark]) .alert-count{color:#d4d4d4}:host([theme=dark]) .alert-count.active{border-left:1px solid #202020;border-right:1px solid #202020}:host([theme=dark]) .alert-dismiss:after{background-color:rgba(43,43,43,.6)}:host([dir=rtl]) .alert-close:last-child{border-radius:0 0 0 2px}:host([dir=rtl]) slot[name=alert-link]::slotted(a){margin-left:unset;margin-right:.75rem}:host([color=blue]){border-block-start-color:#007ac2}:host([color=blue]) .alert-icon svg{fill:#007ac2}:host([color=red]){border-block-start-color:#d83020}:host([color=red]) .alert-icon svg{fill:#d83020}:host([color=yellow]){border-block-start-color:#edd317}:host([color=yellow]) .alert-icon svg{fill:#edd317}:host([color=green]){border-block-start-color:#35ac46}:host([color=green]) .alert-icon svg{fill:#35ac46}:host([duration=fast]) .alert-dismiss:after{-webkit-animation:dismissProgress 6s linear;animation:dismissProgress 6s linear}:host([duration=medium]) .alert-dismiss:after{-webkit-animation:dismissProgress 10s linear;animation:dismissProgress 10s linear}:host([duration=slow]) .alert-dismiss:after{-webkit-animation:dismissProgress 14s linear;animation:dismissProgress 14s linear}\@-webkit-keyframes dismissProgress{0%{width:0;opacity:0}to{width:100%;opacity:1}}\@keyframes dismissProgress{0%{width:0;opacity:0}to{width:100%;opacity:1}}"; }
}
AlertInterface.injectProps(CalciteAlert, ["currentAlert", "queueLength"]);

export { CalciteAlert as calcite_alert };
