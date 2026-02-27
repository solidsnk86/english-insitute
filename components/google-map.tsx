export const GoogleMap = ( ) => {
    return (
        <div className="flex justify-center pt-24">
               {/* Section Header */}
          <div>
            <div className="text-center mb-12">
            <span className="text-primary text-sm font-semibold tracking-wider uppercase">
              Donde encontrarnos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance section-title" data-anim="left">
              Empezá hoy tu camino en el inglés
            </h2>
            <p className="text-muted-foreground text-pretty">
              Estamos ubicados en la calle Maza 621 entre Avenida Colón y Segovia
            </p>
          </div>
            <iframe 
            style={{ border: 0 }} loading="lazy"
            className="rounded-xl md:w-150 md:h-120 w-90 h-85"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2595.027934372167!2d-68.32722652587914!3d-34.62109409860964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9679a802b0262437%3A0x19fd41fe8d177038!2sJuan%20Agust%C3%ADn%20Maza%20621%2C%20M5600HLC%20San%20Rafael%2C%20Mendoza!5e1!3m2!1ses-419!2sar!4v1772226503993!5m2!1ses-419!2sar">
            </iframe>
          </div>
        </div>
    )
}