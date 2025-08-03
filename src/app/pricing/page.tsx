import Header from "@/components/layout/header";
import PricingPanel from "@/components/layout/pricingPanel";

export default function Pricing() {

    const standardPlanPoints = [
        { text: "4GB RAM Server", included: true },
        { text: "Up to 20 Player Slots", included: true },
        { text: "NVMe SSD Storage", included: true },
        { text: "Automated Daily Backups", included: true },
        { text: "DDoS Protection", included: true },
        { text: "Mod Support (Up to 10 Mods)", included: true },
        { text: "Full FTP Access", included: true },
        { text: "Custom Domain Name", included: false },
        { text: "Multiple Server Locations", included: false }
    ];

    const premiumPlanPoints = [
        { text: "8GB RAM Server", included: true },
        { text: "Up to 50 Player Slots", included: true },
        { text: "Premium NVMe SSD Storage", included: true },
        { text: "Hourly Automated Backups", included: true },
        { text: "Advanced DDoS Protection", included: true },
        { text: "Unlimited Mod Support", included: true },
        { text: "Full FTP Access", included: true },
        { text: "Custom Domain Name", included: true },
        { text: "Multiple Server Locations", included: true }
    ];

    return(
        <div>
            <Header/>
            <div className="flex flex-col gap-2 justify-center items-center md:flex-row mt-4">
                <PricingPanel
                    points={premiumPlanPoints}
                    title="Premium Plan"
                    price="$29.99"
                    description="Perfect for large communities"
                />

                <PricingPanel
                points={standardPlanPoints}
                title="Standard Plan"
                price="$14.99"
                description="Perfect for small to medium communities"
                />
            </div>

        </div>
    )
}
