import { useState, useRef, DragEvent } from "react";
import { useNavigate } from "react-router-dom";
import { UploadCloud, Link as LinkIcon, FileCode, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AppLayout } from "@/components/AppLayout";
import { toast } from "sonner";

const UploadPage = () => {
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [generating, setGenerating] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  const handleGenerate = () => {
    if (!file && !url) {
      toast.error("Please upload a spec or paste a URL");
      return;
    }
    setGenerating(true);
    toast.success("Generating test cases...");
    setTimeout(() => {
      setGenerating(false);
      navigate("/results");
    }, 1200);
  };

  return (
    <AppLayout title="Upload Spec" description="Generate AI-powered test cases from your API spec">
      <div className="mx-auto max-w-3xl space-y-8">
        {/* Drop zone */}
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
          className={`group relative cursor-pointer rounded-2xl border-2 border-dashed bg-card p-12 text-center transition-base ${
            dragging
              ? "border-primary bg-accent/50 scale-[1.01]"
              : "border-border hover:border-primary/50 hover:bg-accent/30"
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept=".yaml,.yml,.json,.graphql"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />

          {file ? (
            <div className="flex items-center justify-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <FileCode className="h-7 w-7 text-primary" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {(file.size / 1024).toFixed(1)} KB
                </p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                }}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-hero shadow-soft transition-base group-hover:scale-110">
                <UploadCloud className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                Drop your API spec here
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                OpenAPI, Postman, GraphQL — up to 10MB
              </p>
              <Button variant="outline" size="sm" className="mt-5" type="button">
                Browse files
              </Button>
            </>
          )}
        </div>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-muted/30 px-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Or paste a URL
            </span>
          </div>
        </div>

        {/* URL input */}
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <Label htmlFor="spec-url" className="text-sm font-medium">
            Spec URL
          </Label>
          <div className="mt-2 flex gap-3">
            <div className="relative flex-1">
              <LinkIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="spec-url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://api.example.com/openapi.yaml"
                className="pl-9"
              />
            </div>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            We'll fetch and parse your spec — supports public URLs and authenticated endpoints.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-3">
          <Button
            variant="hero"
            size="xl"
            onClick={handleGenerate}
            disabled={generating}
            className="w-full md:w-auto"
          >
            <Sparkles className="h-5 w-5" />
            {generating ? "Generating..." : "Generate Test Cases"}
          </Button>
          <p className="text-xs text-muted-foreground">
            Average generation time: <strong>42 seconds</strong>
          </p>
        </div>
      </div>
    </AppLayout>
  );
};

export default UploadPage;
