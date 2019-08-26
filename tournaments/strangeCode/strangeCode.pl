#!/usr/bin/perl
use strict;
use warnings FATAL => 'all';

sub strangeCode {
    my ($s, $e) = @_;

    my @result;
    my $c = '-';

    while ($s++ < --$e) {
        $c = $c eq '-' || $c eq 'b' ? 'a' : 'b';
        push(@result, $c);
    }

    return join('', @result);
}
