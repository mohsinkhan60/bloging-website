export default function BunzoLayout() {
  return (
    <section className="bg-canvas-light py-24">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="text-ink font-normal border-l-4 border-brand pl-10"
            style={{ fontSize: 'clamp(38px, 5vw, 72px)', letterSpacing: '-2px', lineHeight: '1.05' }}
          >
            You Can Read
            <br />
            And Write With
            <br />
            Bunzo.
          </div>
          <div className="space-y-10">
            <div className="border-t border-hairline pt-8">
              <h2 className="text-ink text-[22px] font-normal mb-3" style={{ letterSpacing: '-0.24px' }}>
                Mission &amp; Vision
              </h2>
              <p className="text-slate text-[15px] leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
              </p>
            </div>
            <div className="border-t border-hairline pt-8">
              <h2 className="text-ink text-[22px] font-normal mb-3" style={{ letterSpacing: '-0.24px' }}>
                Bunzo History
              </h2>
              <p className="text-slate text-[15px] leading-relaxed">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
