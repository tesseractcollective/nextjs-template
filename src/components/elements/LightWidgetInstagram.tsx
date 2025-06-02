interface LightWidgetInstagramProps {
  lightWidgetId: string;
  instagramUser: string;
}

const LightWidgetInstagram: React.FC<LightWidgetInstagramProps> = ({
  lightWidgetId,
  instagramUser,
}) => {
  return null;
  // return (
  //   <div className="my-0 block h-full bg-primary">
  //     <h3 className="text-center text-4xl py-8">{`@${instagramUser}`}</h3>
  //     <script src="https://cdn.lightwidget.com/widgets/lightwidget.js"></script>
  //     <iframe
  //       src={`//lightwidget.com/widgets/${lightWidgetId}.html`}
  //       scrolling="no"
  //       allowTransparency={true}
  //       className="lightwidget-widget"
  //       style={{ width: "100%", border: 0, overflow: "hidden" }}
  //     ></iframe>
  //   </div>
  // );
};

export default LightWidgetInstagram;
