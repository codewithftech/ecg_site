const OrderNotesCard = ({ orderNotes, setOrderNotes }) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-bold text-foreground mb-4">Order Notes</h3>
      <textarea
        value={orderNotes}
        onChange={(e) => setOrderNotes(e.target.value)}
        placeholder="Special instructions or requests..."
        className="w-full min-h-[140px] rounded-2xl border border-border bg-background p-4 outline-none"
      />
    </div>
  );
};

export default OrderNotesCard;


